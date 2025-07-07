import React from "react";
import {
  Typography,
  Button,
  Stack,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { UserRole as RoleType } from "../types/User";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import GroupsIcon from "@mui/icons-material/Groups";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const getRoleIcon = (role: RoleType["role"]) => {
  switch (role) {
    case "USER":
      return <PersonIcon />;
    case "AGENT":
      return <SupervisorAccountIcon />;
    case "CUSTOMER":
      return <GroupsIcon />;
    case "LANDLORD":
      return <BusinessIcon />;
    case "ADMIN":
      return <AdminPanelSettingsIcon />;
    default:
      return null;
  }
};

const formatRoleLabel = (role: string) =>
  role.charAt(0) + role.slice(1).toLowerCase();

const RoleSwitcher: React.FC = () => {
  const { state, setActiveRole } = useAuth();
  const navigate = useNavigate();

  const handleSelectRole = (role: RoleType) => {
    setActiveRole(role);
    navigate("/");
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={3} sx={{ p: 6, width: 400, textAlign: "center" }}>
        <Typography variant="h5">
          Login As
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={3}>
          Choose your profile to continue
        </Typography>

        <Stack spacing={2}>
          {state.user?.UserRoles?.map((role) => (
            <Button
              key={role.id}
              variant="contained"
              size="large"
              onClick={() => handleSelectRole(role)}
              startIcon={getRoleIcon(role.role)}
              sx={{ justifyContent: "flex-start", pl: 2 }}
            >
              {formatRoleLabel(role.role)}
            </Button>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default RoleSwitcher;
