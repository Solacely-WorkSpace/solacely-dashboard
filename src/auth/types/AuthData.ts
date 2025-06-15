export interface AuthData {
  tokens: {
    access: string,
    refresh: string,
  };
  user: any;
}

export interface AuthEntity {
  isAuthenticated: boolean;
  user?: any;
  error?: string;
}

export interface TokenEntity {
  refresh: string;
  access: string;
}
