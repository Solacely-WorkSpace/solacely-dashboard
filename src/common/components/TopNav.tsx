import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import WelcomeMessage from "./WelcomeMessage";
import { ReactComponent as NotificationIcon } from "../../assets/images/topnav/notification.svg";
import { ReactComponent as ChevronIcon } from "../../assets/images/topnav/chevron-down.svg";
import { useAuth } from "../../auth/hooks/useAuth";
const TopNav: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { state, logout } = useAuth();

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      console.log("logged out");
    }
  };

  return (
    <Box width="100%">
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          color: "#000",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <WelcomeMessage />

          <Box display="flex" alignItems="center" gap={2}>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="success">
                <NotificationIcon />
              </Badge>
            </IconButton>

            <Box
              onClick={handleAvatarClick}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: 10,
                bgcolor: "#FAFAFA",
                cursor: "pointer",
                height: 58,
                padding: "16px 20px",
              }}
            >
              <Avatar
                alt={state.user.full_name}
                src="/path/to/profile.jpg"
                sx={{ width: 32, height: 32 }}
              />
              <Box component="span" sx={{ fontWeight: 500 }}>
                {state.user.full_name}
              </Box>
              <ChevronIcon />
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNav;
