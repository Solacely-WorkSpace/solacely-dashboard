import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import componentsOverrides from "./ui";
import typography from "./typography";

const baseOptions = {
  typography,
};

const lightTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: "light",
    ...palette,
  },
});
lightTheme.components = componentsOverrides(lightTheme);

const darkTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: "dark",
    ...palette,
  },
});
darkTheme.components = componentsOverrides(darkTheme);

export { lightTheme, darkTheme };
