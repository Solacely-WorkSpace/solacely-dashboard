import { lazy } from "react";
import DASHBOARD_ROUTES from "./dashboardRouteList";
import AuthLayout from "../../common/layouts/AuthLayout";

const DashboardPage = lazy(() => import("../pages/Dashboard"));

const dashboardRoutes = {
  path: DASHBOARD_ROUTES.BASE.PATH,
  element: <AuthLayout />,
  children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
  ],
};

export default dashboardRoutes;
