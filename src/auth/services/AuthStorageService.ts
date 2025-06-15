import { BaseStorageService } from "../../common/services/BaseStorageService";
import type { AuthData } from "../types/AuthData";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_KEY = "user";

class AuthStorageService extends BaseStorageService {
  setUserData(auth: AuthData): void {
    this.setTokens(auth.tokens.access, auth.tokens.refresh);
    this.setItem(USER_KEY, auth.user);
  }

  setTokens(access: string, refresh: string): void {
    this.setItem(ACCESS_TOKEN_KEY, access);
    this.setItem(REFRESH_TOKEN_KEY, refresh);
  }

  getAccessToken(): string | null {
    return this.getItem<string>(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return this.getItem<string>(REFRESH_TOKEN_KEY);
  }

  getUser<T = any>(): T | null {
    return this.getItem<T>(USER_KEY);
  }

  clear(): void {
    this.clearAll([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY]);
  }
}

export const authStorageService = new AuthStorageService();
