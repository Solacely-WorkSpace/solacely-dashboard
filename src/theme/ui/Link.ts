import type { Components, Theme } from "@mui/material";

const Link = (theme: Theme): Components<Theme> => ({
  MuiLink: {
    styleOverrides: {
      root: {
        "&:hover": {
          textDecoration: "none",
          color: "red", 
        },
      },
    },
  },
});

export default Link;
