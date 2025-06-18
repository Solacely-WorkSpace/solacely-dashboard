import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, type FC } from "react";
import { ReactComponent as EditIcon } from "../../assets/images/common/edit.svg";
import { ReactComponent as DotsIcon } from "../../assets/images/common/dots-vertical.svg";
import { ReactComponent as DeleteIcon } from "../../assets/images/common/delete.svg";
import { ReactComponent as ViewIcon } from "../../assets/images/common/view.svg";
import type { Apartment } from "../types/Apartment";
import { useNavigate } from "react-router-dom";
import SPACES_ROUTES from "../config/spacesRouteList";

interface ActionCellProps {
  row: Apartment;
  onDelete: (id: number) => void;
}

const ActionCell: FC<ActionCellProps> = ({ row, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteApartment = async () => {
    if (!deleteId) return;
    try {
      await onDelete(deleteId);
      setDeleteConfirmOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const menuActions = [
    {
      label: "Edit",
      icon: <EditIcon sx={{ fontSize: 16 }} />,
      onClick: (rowId: number) => {
        handleClose();
        const path = SPACES_ROUTES.UPDATE_APARTMENT.PATH.replace(
          ":id",
          String(rowId)
        );
        navigate(path);
      },
    },
    {
      label: "View",
      icon: <ViewIcon sx={{ fontSize: 16 }} />,
      onClick: (rowId: number) => {
        handleClose();
        const path = SPACES_ROUTES.VIEW_APARTMENT.PATH.replace(
          ":id",
          String(rowId)
        );
        navigate(path);
      },
    },
    {
      label: "Delete",
      icon: <DeleteIcon sx={{ fontSize: 16 }} />,
      onClick: (rowId: number) => {
        handleClose();
        setDeleteId(rowId);
        setDeleteConfirmOpen(true);
      },
    },
  ];

  return (
    <>
      <Tooltip title="Actions">
        <IconButton
          onClick={handleOpen}
          sx={{
            border: "1px solid #E6E8F0",
            borderRadius: 2,
            "&:hover": {
              border: "1px solid #E6E8F0",
            },
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <DotsIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          padding: "8px 12px",
          width: 160,
          boxShadow: "8px 12px 24px rgba(93, 106, 131, 0.1)",
          borderRadius: 12,
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuActions.map((action) => {
          const isDelete = action.label.toLowerCase() === "delete";
          return (
            <MenuItem
              key={action.label}
              onClick={() => action.onClick(row.id)}
              sx={{
                fontSize: 12,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {action.icon}
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: isDelete ? "red" : "#9EA0AB",
                }}
              >
                {action.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
      <Dialog
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this apartment?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteConfirmOpen(false)}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button onClick={deleteApartment} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ActionCell;
