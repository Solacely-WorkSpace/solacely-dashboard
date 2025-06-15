import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  TableCell
} from "@mui/material";
import { useState } from "react";
import { ReactComponent as EditIcon } from "../../assets/images/common/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/images/common/delete.svg";
import { ReactComponent as ViewIcon } from "../../assets/images/common/view.svg";

const ActionCell = ({ row }: { row: Apartment }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableCell>
      <Tooltip title="Actions">
        <IconButton onClick={handleOpen}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => console.log("Edit", row.id)}><EditIcon/> Edit</MenuItem>
        <MenuItem onClick={() => console.log("View", row.id)}><ViewIcon/>  View </MenuItem>
        <MenuItem onClick={() => console.log("Delete", row.id)}><DeleteIcon/>  Delete</MenuItem>
      </Menu>
    </TableCell>
  );
};


export default ActionCell;