const AUTH_ROUTES = {
  BASE: { PATH: "/auth", NAME: "Auth" },
  LOGIN: { PATH: "/auth/login", NAME: "Login" },
  REGISTER: { PATH: "/auth/register", NAME: "Register" },
  RESET_PASSWORD: { PATH: "/auth/password/reset", NAME: "Reset Password" },
  RESET_PASSWORD_VERIFY: { PATH: "/auth/password/verify", NAME: "Reset Password" },
  NEW_PASSWORD: { PATH: "/auth/password/new", NAME: "Reset Password" },
};

export default AUTH_ROUTES;
