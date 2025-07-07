import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import TopNav from "../components/TopNav";
import { type FC, type ReactNode } from "react";

interface AuthLayoutProps {
  children?: ReactNode;
}

const PlainLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", width: "100vw" }}>
      <Outlet />
    </Box>
  );
};

export default PlainLayout;
