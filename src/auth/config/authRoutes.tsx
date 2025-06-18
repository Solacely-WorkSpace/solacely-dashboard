import { lazy } from "react";
import AUTH_ROUTES from "./authRouteList";
import GuestLayout from "../../common/layouts/GuestLayout";

const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const PasswordResetVerification = lazy(() => import("../pages/PasswordResetVerification"));
const NewPassword = lazy(() => import("../pages/NewPassword"));

const authRoutes = {
  path: AUTH_ROUTES.BASE.PATH,
  element: <GuestLayout />,
  children: [
    { path: AUTH_ROUTES.LOGIN.PATH, element: <LoginPage /> },
    { path: AUTH_ROUTES.REGISTER.PATH, element: <RegisterPage /> },
    { path: AUTH_ROUTES.RESET_PASSWORD.PATH, element: <ForgotPassword /> },
    { path: AUTH_ROUTES.RESET_PASSWORD_VERIFY.PATH, element: <PasswordResetVerification /> },
    { path: AUTH_ROUTES.NEW_PASSWORD.PATH, element: <NewPassword /> },
  ],
};

export default authRoutes;
