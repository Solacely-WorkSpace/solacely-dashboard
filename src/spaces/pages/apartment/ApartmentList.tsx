import type { FC } from "react";
import moment from "moment";
import {
  Box,
  Button,
  InputAdornment,
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
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import { apartmentService } from "../../service/ApartmentService";
import type { Apartment } from "../../types/Apartment";
import { ReactComponent as SortIcon } from "../../../assets/images/common/sort.svg";
import { ReactComponent as AddIcon } from "../../../assets/images/common/add.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/common/add.svg";
import ActionCell from "../../components/ActionCell";
import ApartmentStatusBadge from "../../components/ApartmentStatusBadge.tsx";
import { BuildingTypeLabels } from "../../config/const/BuildingTypeLabels.ts";
import ApartmentFilter from "../../components/apartment/ApartmentFilter.tsx";

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
    { id: "status", label: "Status", sortable: false },
    { id: "type", label: "Type", sortable: false },
    { id: "options", label: "", sortable: false },
  ];

  const onDelete = async (deleteId: number) => {
    try {
      await apartmentService.deleteById(deleteId);
      setApartments((prev) => prev.filter((apt) => apt.id !== deleteId));
    } catch (error) {
      console.error("Failed to delete apartment:", error);
    }
  };

  const fetchApartments = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await apartmentService.getAll();
      const data = response.data as Apartment[];
      setApartments(data);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 700);
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
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
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          <AddIcon />
          Add new
        </Button>
      </Box>
      <ApartmentFilter />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            gap: 2,
          }}
        >
          <CircularProgress />
          <Typography variant="body1" color="text.secondary">
            Fetching apartments...
          </Typography>
        </Box>
      ) : (
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
                              ? SortIcon
                              : SortIcon
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
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={apartment.images[0]?.image}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: "cover",
                          borderRadius: 1,
                          border: "1px solid #ccc",
                        }}
                      />
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
                        >
                          {apartment.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#9EA0AB",
                            fontSize: 14,
                            fontWeight: 400,
                          }}
                        >
                          {apartment.id}
                        </Typography>
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
                        {moment(apartment.created_at).format("MMM DD, YYYY")}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#718096",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {moment(apartment.created_at).format("[at] hh.mm A")}
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
                      ₦{Number(apartment.price).toLocaleString()}
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
                  <TableCell>
                    <ApartmentStatusBadge status={apartment.status} />
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
                      {BuildingTypeLabels[apartment.building_type]}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ActionCell row={apartment} onDelete={onDelete} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ApartmentList;
