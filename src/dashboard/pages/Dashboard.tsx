import { useEffect, useState, type FC } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Stats from "../components/stats/Stats";
import type { Apartment } from "../../spaces/types/Apartment";
import { apartmentService } from "../../spaces/service/ApartmentService";
import ApartmentCard from "../../spaces/components/ApartmentCard";
import { ChevronRight } from "@mui/icons-material";

const Dashboard: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const fetchApartments = async (): Promise<void> => {
    setLoading(true);

    try {
      const { data } = await apartmentService.getAll();
       setApartments((data as Apartment[]).slice(0, 3));
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  return (
    <Box>
      <Stats />
      <Grid container spacing={20}>
        <Grid size={9}>
          <Paper
            sx={{
              mt: 5,
              boxShadow: "none",
              border: "1px solid #E6E8F0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#171717",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Recently listed property
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  backgroundColor: "#FAFAFA",
                  color: "#1A202C",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                {" "}
                View all <ChevronRight sx={{ fontSize: 14 }} />
              </Button>
            </Box>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 200,
                }}
              >
                <CircularProgress size={32} color="primary" />
              </Box>
            ) : (
              apartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))
            )}
          </Paper>
          <Grid size={3}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
