import React from "react";
import {
  Drawer,
  List,
  Toolbar,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import Logo from "../../assets/images/logo.svg";
import LogoIcon from "../../assets/images/logo-icon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/images/sidenav/dashboard.svg";
import { ReactComponent as SpacesIcon } from "../../assets/images/sidenav/spaces.svg";
import { ReactComponent as CustomersIcon } from "../../assets/images/sidenav/customers.svg";
import { ReactComponent as PartnersIcon } from "../../assets/images/sidenav/partners.svg";
import { ReactComponent as CommentsIcon } from "../../assets/images/sidenav/comments.svg";
import { ReactComponent as AccountIcon } from "../../assets/images/sidenav/account.svg";
import { ReactComponent as UserMgtIcon } from "../../assets/images/sidenav/users.svg";
import SideNavItem from "./SideNavItem";

interface SideNavProps {
  collapsed: boolean;
  toggleNav: () => void;
}

const drawerWidths = {
  expanded: 260,
  collapsed: 74,
};

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
    subItems: [],
  },
  {
    label: "Spaces",
    icon: <SpacesIcon />,
    path: "/spaces",
    subItems: [
      { label: "Apartment", path: "/spaces/apartments" },
      { label: "Co-working Space", path: "/spaces/co-working" },
      { label: "Hotel", path: "", pending: true },
      { label: "Real Estate", pending: true }
    ],
  },
  {
    label: "Customers",
    icon: <CustomersIcon />,
    path: "/settings",
    subItems: [],
  },
  {
    label: "Partners",
    icon: <PartnersIcon />,
    path: "/settings",
    subItems: [],
  },
  {
    label: "Comments",
    icon: <CommentsIcon />,
    path: "/settings",
    subItems: [],
  },
  { label: "Account", icon: <AccountIcon />, path: "/settings", subItems: [] },
  { label: "User Mgt", icon: <UserMgtIcon />, path: "/settings", subItems: [] },
];

const SideNav: React.FC<SideNavProps> = ({ collapsed, toggleNav }) => {

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? drawerWidths.collapsed : drawerWidths.expanded,
        flexShrink: 0,
        whiteSpace: "nowrap",
        [`& .MuiDrawer-paper`]: {
          width: collapsed ? drawerWidths.collapsed : drawerWidths.expanded,
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: "width 0.3s",
          borderRadius: 0,
          backgroundColor: "#FFFFFF",
          paddingTop: 5
        },
      }}
    >
      <Toolbar  sx={{
            height: "auto",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center'            
          }}>
        <Box
          component="img"
          src={collapsed? LogoIcon : Logo}
          alt="Logo"
          sx={{
            height: "auto",
            width: 140
          }}
        />
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map(({ label, icon, path, subItems }) => (
            <SideNavItem
              key={label}
              label={label}
              icon={icon}
              path={path}
              subItems={subItems}
              collapsed={collapsed}
            />
          ))}
        </List>
        <Divider sx={{ mt: 2 }} />
        <Box display="flex" justifyContent="center" py={1}>
          <IconButton onClick={toggleNav}>
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideNav;
