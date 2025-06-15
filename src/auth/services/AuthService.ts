import { authStorageService } from "./AuthStorageService";
import BaseAPIService from "../../common/services/BaseAPIService";
import type { AuthData, AuthEntity, TokenEntity } from "../types/AuthData";

class AuthService extends BaseAPIService {
  constructor() {
    super("/");
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

  public async verify(): Promise<AuthEntity> {
    const token = authStorageService.getAccessToken();
    if (!token) {
      authStorageService.clear();
      return { isAuthenticated: false };
    }

    try {
      const refreshToken = authStorageService.getRefreshToken();
      if (!refreshToken) throw new Error("No refresh token available");
      const { data } = await this.post<TokenEntity, { refresh: string }>(
        "/token/refresh/",
        { refresh: refreshToken }
      );

      authStorageService.setTokens(data.access, data.refresh);
      return { isAuthenticated: true };
    } catch (e: any) {
      authStorageService.clear();
      return { isAuthenticated: false, error: e.message };
    }
  }

  public async refreshToken(): Promise<void> {
    const refreshToken = authStorageService.getRefreshToken();
    if (!refreshToken) throw new Error("No refresh token available");

    const { data } = await this.post<AuthData, { refreshToken: string }>(
      "/refresh",
      { refreshToken }
    );

    authStorageService.setUserData(data);
  }
}

export const authService = new AuthService();
