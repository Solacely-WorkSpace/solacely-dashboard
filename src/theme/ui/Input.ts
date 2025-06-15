import type { Components, Theme } from "@mui/material";

const Input = (theme: Theme): Components<Theme> => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        height: 55,
        borderRadius: 10,
        paddingTop: 12,
        paddingRight: 16,
        paddingBottom: 12,
        paddingLeft: 16,
        borderWidth: 2,
        marginBottom: 25,
        transition: theme.transitions.create(["border-color", "box-shadow"], {
          duration: theme.transitions.duration.short,
        }),
        "& input": {
          padding: 0,
          height: "100%",
          boxSizing: "border-box",
          backgroundColor: "transparent",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#E6E8F0", 
          borderWidth: "2px",
        },
        "&.Mui-focused": {
          backgroundColor: "none",
          borderColor: theme.palette.primary.main,
        },

        "&.valid-input": {
          borderColor: theme.palette.success.main,
          "&:hover": {
            borderColor: theme.palette.success.dark,
          },
          "&.Mui-focused": {
            borderColor: theme.palette.success.dark,
            boxShadow: `0 0 0 2px ${theme.palette.success.light}`,
          },
        },
        "&.MuiOutlinedInput-multiline": {
          height: "auto",
          paddingTop: 8,
          paddingBottom: 8,
          "& textarea": {
            height: "auto !important",
            minHeight: 100, 
            padding: 0,
            resize: "vertical", 
          },
        },
        "&.MuiOutlinedInput-multiline input": {
          height: "auto",
        },
      },
    },
  },
});

export default Input;
