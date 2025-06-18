import {
  useReducer,
  useMemo,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../services/AuthService";

const AuthActionType = {
  INITIALIZE: "INITIALIZE",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ERROR: "ERROR",
} as const;

type AuthActionType = (typeof AuthActionType)[keyof typeof AuthActionType];

interface AuthAction {
  type: AuthActionType;
  payload?: {
    isAuthenticated: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user?: any;
    error?: string;
  };
}

const initialState = { isAuthenticated: false, user: null, error: "" };

function authReducer(state: typeof initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionType.INITIALIZE:
    case AuthActionType.LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload?.isAuthenticated || false,
        user: action.payload?.user ?? state.user,
      };
    case AuthActionType.ERROR:
      return { ...state, error: action.payload?.error ?? state.error };
    case AuthActionType.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);

  const initialize = async () => {
    try {
      const { isAuthenticated, error } = await authService.verify();
      if (error) {
        dispatch({
          type: AuthActionType.ERROR,
          payload: { isAuthenticated, error },
        });
        return;
      }
      let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
      }
      if (!isAuthenticated) {
        dispatch({
          type: AuthActionType.LOGOUT,
        });
      }
      dispatch({
        type: AuthActionType.INITIALIZE,
        payload: { isAuthenticated, user },
      });
    } catch (error) {
      console.error("Failed to initialize authentication state", error);
      dispatch({
        type: AuthActionType.LOGOUT,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const { email, password } = credentials;
      const { isAuthenticated, user, error } = await authService.login(
        email,
        password
      );

      if (error) {
        dispatch({
          type: AuthActionType.ERROR,
          payload: { isAuthenticated, error },
        });
        return;
      }
      dispatch({
        type: AuthActionType.LOGIN,
        payload: { isAuthenticated, user },
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      dispatch({ type: AuthActionType.LOGOUT });
    } catch (error) {
      console.error("Logut failed", error);
    }
  };

  const authContextValue = useMemo(
    () => ({
      state,
      login,
      logout,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
