import type { Theme } from "@mui/material";

const Paper = (theme: Theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: theme.spacing(2),
      },
    },
  },
});

export default Paper;
