import { type FC } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import AuthSlider from "../components/AuthSlider";
import Logo from "../../assets/images/logo.svg";
import { ReactComponent as TopSvg } from "../../assets/images/common/top-guest.svg";
import { ReactComponent as BottomSvg } from "../../assets/images/common/bottom-guest.svg";

const GuestLayout: FC = () => {
  const { state } = useAuth();

  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={{ width: "100vw", height: "100vh"}}>
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
            background: '#521282',
            position: 'relative'
          }}
        >
          <Box sx={{
            position: 'absolute',
            right: 0
          }}>
            <TopSvg/>
          </Box>
          <AuthSlider />

           <Box sx={{
            position: 'absolute',
            left: 0,
            bottom: 0
          }}>
            <BottomSvg/>
          </Box>
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
