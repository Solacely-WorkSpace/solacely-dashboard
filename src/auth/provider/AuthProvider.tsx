import {
  useReducer,
  useMemo,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../services/AuthService";
import type { User, UserRole } from "../types/User";

const AuthActionType = {
  INITIALIZE: "INITIALIZE",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ERROR: "ERROR",
  ROLE_SWITCH: "ROLE_SWITCH",
} as const;

type AuthActionType = (typeof AuthActionType)[keyof typeof AuthActionType];

interface AuthAction {
  type: AuthActionType;
  payload?: {
    isAuthenticated: boolean;
    user?: User;
    error?: string;
    activeRole?: UserRole;
  };
}

const initialState: {
  isAuthenticated: boolean;
  error: string;
  user: User | null;
  activeRole: UserRole | null;
} = {
  isAuthenticated: false,
  user: null,
  error: "",
  activeRole: null,
};

function authReducer(state: typeof initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionType.INITIALIZE:
    case AuthActionType.LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload?.isAuthenticated || false,
        user: action.payload?.user ?? state.user,
        activeRole: action.payload?.activeRole ?? state.activeRole,
      };
    case AuthActionType.ERROR:
      return { ...state, error: action.payload?.error ?? state.error };
    case AuthActionType.LOGOUT:
      return initialState;
    case AuthActionType.ROLE_SWITCH:
      return {
        ...state,
        activeRole: action.payload?.activeRole ?? null,
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);

  const initialize = async () => {
    try {
      const { isAuthenticated, error } = await authService.refresh();
      if (error) {
        dispatch({
          type: AuthActionType.ERROR,
          payload: { isAuthenticated, error },
        });
        return;
      }
      const storedUser = localStorage.getItem("user");
      let user: User | null = null;
      if (storedUser) {
        user = JSON.parse(storedUser) as User;
      }

      if (!isAuthenticated || !user) {
        dispatch({ type: AuthActionType.LOGOUT });
        return;
      }

      const defaultRole = user?.UserRoles?.[0] || null;

      dispatch({
        type: AuthActionType.INITIALIZE,
        payload: { isAuthenticated, user, activeRole: defaultRole },
      });
    } catch (error) {
      console.error("Failed to initialize authentication state", error);
      dispatch({ type: AuthActionType.LOGOUT });
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
      console.error("Logout failed", error);
    }
  };

  const setActiveRole = (role: UserRole) => {
    dispatch({
      type: AuthActionType.ROLE_SWITCH,
      payload: { activeRole: role, isAuthenticated: true },
    });
  };

  const authContextValue = useMemo(
    () => ({
      state,
      login,
      logout,
      setActiveRole,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
