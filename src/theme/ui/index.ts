import Button from "./Button";
import Paper from "./Paper";
import Input from "./Input";
import Drawer from "./Drawer";
import ListItemButton from "./ListItemButton";
import Tabs from "./Tabs";
import Link from "./Link";
import Table from "./Table";
import type { Components, Theme } from "@mui/material";

const componentsOverrides = (theme: Theme): Components<Theme> => ({
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
