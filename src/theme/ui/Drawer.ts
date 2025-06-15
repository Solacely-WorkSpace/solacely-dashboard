const Drawer = (theme: any) => ({
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
