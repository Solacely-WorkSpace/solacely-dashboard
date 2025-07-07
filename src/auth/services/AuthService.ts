import { authStorageService } from "./AuthStorageService";
import BaseAPIService from "../../common/services/BaseAPIService";
import type { AuthData, AuthEntity } from "../types/AuthData";

class AuthService extends BaseAPIService {
  constructor() {
    super("/auth");
  }

  public async login(email: string, password: string): Promise<AuthEntity> {
    try {
      const { data } = await this.post<
        AuthData,
        { email: string; password: string }
      >("/login/", { email, password });

      authStorageService.setUserData(data);

      return {
        isAuthenticated: true,
        user: data.user,
      };
    } catch (e: any) {
      console.log(e);
      return {
        isAuthenticated: false,
        error: e.message,
      };
    }
  }

  public async logout(): Promise<void> {
    try {
      await this.post("/logout", {});
    } finally {
      authStorageService.clear();
      window.location.href = "/auth/login";
    }
  }

  public async refresh(): Promise<AuthEntity> {
    const token = authStorageService.getAccessToken();
    if (!token) {
      authStorageService.clear();
      return { isAuthenticated: false };
    }

    try {
      const refreshToken = authStorageService.getRefreshToken();
      if (!refreshToken) throw new Error("No refresh token available");
      const { data } = await this.post<AuthData, unknown>(
        "/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      authStorageService.setTokens(data.tokens.access, data.tokens.refresh);
      return { isAuthenticated: true };
    } catch (e: any) {
      authStorageService.clear();
      return { isAuthenticated: false, error: e.message };
    }
  }


  public async forgotPassword(payload: { email: string }): Promise<AuthEntity> {
    try {
      const { data } = await this.post<AuthData, { email: string }>(
        "/password-reset/",
        payload
      );

      authStorageService.setUserData(data);

      return {
        isAuthenticated: true,
        user: data.user,
      };
    } catch (e: any) {
      console.log(e);
      return {
        isAuthenticated: false,
        error: e.message,
      };
    }
  }
}

export const authService = new AuthService();
