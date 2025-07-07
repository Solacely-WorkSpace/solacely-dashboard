import authRoutes from "./auth/config/authRoutes";
import { createBrowserRouter } from "react-router-dom";
import dashboardRoutes from "./dashboard/config/dashboardRoutes";
import apartmentRoutes from "./spaces/config/spacesRoutes";
import roleSwitherRoutes from "./auth/config/roleSwitherRoutes";

const router = createBrowserRouter([
  authRoutes,
  roleSwitherRoutes,
  dashboardRoutes,
  apartmentRoutes,
]);

export default router;
