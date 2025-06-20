import type { Theme } from "@mui/material";

const Drawer = (theme: Theme) => ({
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: "#f4f6f8",
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
  },
});

export default Drawer;
