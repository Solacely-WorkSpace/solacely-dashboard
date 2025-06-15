import type { Components, Theme } from "@mui/material";

const ListItemButton = (theme: Theme): Components<Theme> => ({
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: theme.spacing(1, 3),
        fontSize: 14,
        fontWeight: 600,
        textTransform: "none",

        // Override selected background to remove opacity/fade
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.primary.main, // no fade on hover
          },
        },

        // Optionally override hover for unselected state
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  },
});

export default ListItemButton;
