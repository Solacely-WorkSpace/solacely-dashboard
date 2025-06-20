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
  components: componentsOverrides as any, 
});

const darkTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: "dark",
    ...palette,
  },
  components: componentsOverrides as any, 
});

export { lightTheme, darkTheme };
