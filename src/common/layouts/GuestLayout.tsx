import { type FC } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import AuthSlider from "../components/AuthSlider";
import Logo from "../../assets/images/logo.svg";

const GuestLayout: FC = () => {
  const { state } = useAuth();

  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          height: "100%",
        }}
      >
        <Grid
          sx={{
            gridColumn: "1 / 2",
            height: "100%",
            width: "100%",
            bgcolor: "grey.100",
            position: "relative",
          }}
        >
          <AuthSlider />
        </Grid>

        <Grid
          sx={{
            gridColumn: {
              xs: "1 / 2",
              sm: "2 / 3",
            },
            height: "100%",
            width: "100%",
            overflowY: "auto",
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ width: 180, height: "auto", position: 'absolute', right: 20, top: 40 }} 
          />
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuestLayout;
