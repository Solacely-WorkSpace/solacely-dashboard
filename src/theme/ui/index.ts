import Button from "./Button";
import Paper from "./Paper";
import Input from "./Input";
import Drawer from "./Drawer";
import ListItemButton from "./ListItemButton";
import Tabs from "./Tabs";
import Link from "./Link";
import Table from "./Table";

const componentsOverrides = (theme: any) => ({
  ...Button(theme),
  ...Paper(theme),
  ...Drawer(theme),
  ...Input(theme),
  ...ListItemButton(theme),
  ...Tabs(theme),
  ...Link(theme),
  ...Table(theme),
});

export default componentsOverrides;
