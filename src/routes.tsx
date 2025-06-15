import authRoutes from "./auth/config/authRoutes";
import { createBrowserRouter } from "react-router-dom";
import dashboardRoutes from "./dashboard/config/dashboardRoutes";
import apartmentRoutes from "./spaces/config/spacesRoutes";

const router = createBrowserRouter([authRoutes, dashboardRoutes, apartmentRoutes]);

export default router;
