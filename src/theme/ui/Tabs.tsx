import type { Components, Theme } from "@mui/material";

const Tabs = (theme: Theme): Components<Theme> => ({
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 48,
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      indicator: {
        height: 3,
        borderRadius: 3,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        minHeight: 48,
        fontSize: 16,
        padding: theme.spacing(2.5, 2),
        fontWeight: 500,
        "&:first-child": {
           paddingLeft: 0,
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&.Mui-selected": {
          color: theme.palette.primary.main,
        },
        "&:hover": {
          color: theme.palette.primary.main,
          backgroundColor: "none",
        },
      },
      textColorPrimary: {
        color: theme.palette.text.primary,
      },
      textColorSecondary: {
        color: theme.palette.text.secondary,
      },
    },
  },
});

export default Tabs;
