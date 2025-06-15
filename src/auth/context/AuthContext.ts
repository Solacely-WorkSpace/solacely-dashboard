import { createContext } from "react";
import type { User } from "../types/User";

interface AuthState {
  isAuthenticated: boolean;
  user: User;
  error: string;
}

interface AuthContextType {
  state: AuthState;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
