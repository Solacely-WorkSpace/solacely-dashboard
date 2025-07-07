import { createContext } from "react";
import type { User, UserRole } from "../types/User";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string;
  activeRole: UserRole | null;
}

interface AuthContextType {
  state: AuthState;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  setActiveRole: (role: UserRole) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
