import React from "react";
import {
  Chip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as ChevronRight } from "../../assets/images/sidenav/chevron-right.svg";
import { ReactComponent as ChevronUp } from "../../assets/images/sidenav/chevron-up.svg";
interface SubItem {
  label: string;
  path?: string;
  pending?: boolean;
}

interface SideNavItemProps {
  label: string;
  icon?: React.ReactNode;
  path: string;
  subItems?: SubItem[];
  collapsed: boolean;
}

const SideNavItem: React.FC<SideNavItemProps> = ({
  label,
  icon,
  path,
  subItems = [],
  collapsed,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const isSelected = location.pathname === path;
  const hasSubItems = subItems.length > 0;

  const handleClick = () => {
    if (hasSubItems) {
      setOpen((prev) => !prev);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <Tooltip title={collapsed ? label : ""} placement="right">
        <ListItemButton
          onClick={handleClick}
          selected={isSelected}
          sx={{
            justifyContent: collapsed ? "center" : "flex-start",
            px: collapsed ? 2 : 3,
            py: collapsed ? 1.5 : 2,
            transition: "all 0.3s",
            fontSize: 14,
            fontWeight: 600,
            borderRadius: "10px",
            color: isSelected ? "#ACB1BB" : "#9EA0AB",
            backgroundColor: isSelected ? "primary.main" : "transparent",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "#fff",
            },
          }}
        >
          {icon && (
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: collapsed ? 0 : 2,
                justifyContent: "center",
                color: "inherit",
              }}
            >
              {icon}
            </ListItemIcon>
          )}
          {!collapsed && <ListItemText primary={label} />}
          {subItems.length > 0 &&
            (open ? (
              <ChevronUp />
            ) : (
              <ChevronRight  />
            ))}
        </ListItemButton>
      </Tooltip>

      {!collapsed && open && hasSubItems && (
        <List component="div" disablePadding sx={{ pl: 4 }}>
          {subItems.map(
            ({ label: subLabel, path: subPath = "", pending = false }) => {
              const selected = location.pathname === subPath;

              return (
                <ListItemButton
                  key={subLabel}
                  onClick={() => {
                    if (!pending && subPath) {
                      navigate(subPath);
                    }
                  }}
                  selected={selected}
                  disabled={pending}
                  sx={{
                    justifyContent: "flex-start",
                    px: 3,
                    py: 1.5,
                    fontSize: 14,
                    fontWeight: 600,
                    borderRadius: "8px",
                    color: selected ? "#ACB1BB" : "#9EA0AB",
                    backgroundColor: selected ? "primary.main" : "transparent",
                    "&.Mui-selected": {
                      backgroundColor: "primary.main", 
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "primary.main", 
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: !pending ? "primary.main" : "inherit",
                      cursor: pending ? "default" : "pointer",
                    },
                    pointerEvents: pending ? "none" : "auto",
                  }}
                >
                  <ListItemText
                    primary={
                      <span
                        style={{
                          display: "flex",
                          alignItems: "end",
                          justifyContent: "space-between",
                          gap: 6,
                        }}
                      >
                        {subLabel}
                        {pending && (
                          <Chip
                            label="Coming Soon"
                            size="small"
                            color="success"
                            sx={{
                              fontWeight: "bold",
                              height: 20,
                              borderRadius: 2,
                              fontSize: 10,
                            }}
                          />
                        )}
                      </span>
                    }
                  />
                </ListItemButton>
              );
            }
          )}
        </List>
      )}
    </>
  );
};

export default SideNavItem;
