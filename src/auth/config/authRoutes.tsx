import { lazy } from "react";
import AUTH_ROUTES from "./authRouteList";
import GuestLayout from "../../common/layouts/GuestLayout";

const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));

const authRoutes = {
  path: AUTH_ROUTES.BASE.PATH,
  element: <GuestLayout />,
  children: [
    { path: AUTH_ROUTES.LOGIN.PATH, element: <LoginPage /> },
    { path: AUTH_ROUTES.REGISTER.PATH, element: <RegisterPage /> },
  ],
};

export default authRoutes;
