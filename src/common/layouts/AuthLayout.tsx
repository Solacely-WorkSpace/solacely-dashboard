import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import { useAuth } from "../../auth/hooks/useAuth";
import { useState, type FC, type ReactNode } from "react";

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { state } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  if (!state.isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", width: '100vw' }}>
      <SideNav collapsed={collapsed} toggleNav={() => setCollapsed(!collapsed)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin-left 0.3s",
          width: '100%',
          padding: "20px",
          minHeight: "100%"
        }}
      >
      <TopNav />
       <Box sx={{ padding: "20px",}}>
         {children || <Outlet />}
       </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
