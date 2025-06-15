import Button from "./Button";
import Paper from "./Paper";
import Input from "./Input";
import Drawer from "./Drawer";
import ListItemButton from "./ListItemButton";

const componentsOverrides = (theme: any) => ({
  ...Button(theme),
  ...Paper(theme),
  ...Drawer(theme),
  ...Input(theme),
  ...ListItemButton(theme),
});

export default componentsOverrides;
