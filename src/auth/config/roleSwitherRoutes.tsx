import { lazy } from "react";
import AUTH_ROUTES from "./authRouteList";
import PlainLayout from "../../common/layouts/PlainLayout";

const RoleSwitcher = lazy(() => import("../pages/RoleSwitcher")); 

const roleSwitherRoutes = {
  path: AUTH_ROUTES.BASE.PATH,
  element: <PlainLayout />,
  children: [
    { path: AUTH_ROUTES.ROLE_SWITCH.PATH, element: <RoleSwitcher /> },
  ],
};


export default roleSwitherRoutes;
