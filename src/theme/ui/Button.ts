import type { Components, Theme } from "@mui/material";

const Button = (theme: Theme): Components<Theme> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: "none",
        padding: `${theme.spacing(1, 2)}`, 
        fontSize: 16,
         "&:focus": {
           boxShadow: "none",
           outline: "none"
        },
      },
      containedPrimary: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: 'none',
        },
      },
      containedSuccess: {
        borderColor: theme.palette.success.main,
        color: "#fff",
        backgroundColor: theme.palette.success.main,
        "&:hover": {
          backgroundColor: theme.palette.success.dark,
          color: theme.palette.success.dark,
           borderColor: theme.palette.success.dark,
        },
      },
      outlinedSuccess: {
        borderColor: theme.palette.success.main,
        color: "theme.palette.success.contrastText",
        backgroundColor: theme.palette.success.dark,
        "&:hover": {
           borderColor: theme.palette.success.main,
        },
      },
      outlinedInfo: {
        borderColor: '#E6E8F0',
        color: '#171717',
        backgroundColor: '#fff',
        "&:hover": {
           borderColor: '#E6E8F0',
        },
      },
    },
  },
});

export default Button;
