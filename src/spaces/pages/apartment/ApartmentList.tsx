import type { FC } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Select,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  Paper,
  TableContainer,
} from "@mui/material";
import { useEffect, useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { apartmentService } from "../../service/ApartmentService";
import type { Apartment } from "../../types/Apartment";
import { ReactComponent as SortIcon } from "../../../assets/images/common/sort.svg";
import { ReactComponent as AddIcon } from "../../../assets/images/common/add.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/common/add.svg";
import ActionCell from "../../components/ActionCell";

const ApartmentList: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [orderBy, setOrderBy] = useState<keyof Apartment>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (columnId: keyof Apartment) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };
  const columns: {
    id: keyof Apartment | string;
    label: string;
    sortable?: boolean;
  }[] = [
    { id: "id", label: "Title/Property ID", sortable: true },
    { id: "date", label: "Date", sortable: true },
    { id: "location", label: "Location", sortable: true },
    { id: "amount", label: "Amount", sortable: true },
    { id: "status", label: "Status", sortable: false }, // not sortable
    { id: "type", label: "Type", sortable: false },
    { id: "options", label: "", sortable: false },
  ];

  const fetchApartments = async (): Promise<void> => {
    setLoading(true);

    try {
      const data = await apartmentService.getAll();
      setApartments(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          fullWidth
          sx={{ width: 295 }}
          placeholder="Search for Apartment.."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />

        <Button
          component={RouterLink}
          to="/spaces/apartments/add"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            height: 55,
            width: 133,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add new
        </Button>
      </Box>
      <Box sx={{}}>
        <Select></Select>
        <Select></Select>
        <Select></Select>
        <Select></Select>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sortDirection={
                    column.sortable && orderBy === column.id ? order : false
                  }
                >
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : "asc"}
                      onClick={() => handleSort(column.id as keyof Apartment)}
                      IconComponent={
                        orderBy === column.id
                          ? order === "asc"
                            ? ArrowUpwardIcon
                            : ArrowDownwardIcon
                          : () => null
                      }
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {apartments.map((apartment) => (
              <TableRow key={apartment.id}>
                <TableCell sx={{ fontWeight: "bold" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <image />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#171717",
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      ></Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9EA0AB",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      ></Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#515151",
                        fontSize: 16,
                        fontWeight: 400,
                      }}
                    >
                      Jan 29, 2022
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#718096",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      at 08.00 PM
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "primary.main" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#515151",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    {apartment.location}
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: "green" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#515151",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    ₦{Number(apartment.amount).toLocaleString()}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#718096",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Monthly
                  </Typography>
                </TableCell>
                label
                <TableCell>
                  {/* Custom badge styling */}
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor:
                        apartment.status === "approved"
                          ? "success.light"
                          : apartment.status === "pending"
                          ? "warning.light"
                          : "error.light",
                      color:
                        apartment.status === "approved"
                          ? "success.main"
                          : apartment.status === "pending"
                          ? "warning.main"
                          : "error.main",
                      fontSize: 12,
                      textTransform: "capitalize",
                    }}
                  >
                    {apartment.status}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#515151",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    {apartment.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  <ActionCell row={apartment} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ApartmentList;
