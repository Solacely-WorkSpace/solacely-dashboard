import React from "react";
import { Typography, Box } from "@mui/material";
import { useAuth } from "../../auth/hooks/useAuth";

const WelcomeMessage: React.FC = () => {
    const {state} = useAuth();
  return (
    <Box>
      <Typography variant="h6"sx={{
        color: "warning.contrastText",
        fontSize: 16
      }}>
        Hi {state.user.full_name}
      </Typography>
      <Typography variant="h6" sx={{
        color: "#9EA0AB",
        fontSize: 16,
      }}>
        Welcome back!
      </Typography>
    </Box>
  );
};

export default WelcomeMessage;
