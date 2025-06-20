import { type FC } from "react";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";

interface BasicInformationProps {
  methods: any;
}

const PaymentBreakDown: FC<BasicInformationProps> = ({ methods }) => {
  console.log(methods);
  return (
    <Container
      sx={{
        width: "80%",
        margin: 0,
      }}
    >
      <Grid container spacing={6}>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              htmlFor="email-input"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Light Fee
            </Typography>
            <TextField label="Enter light fee" fullWidth />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              htmlFor="email-input"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Security fee
            </Typography>
            <TextField label="Enter price" fullWidth />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              htmlFor="email-input"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Estate Due
            </Typography>
            <TextField label="Enter price" rows={4} fullWidth />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              htmlFor="email-input"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Bin Contributiion
            </Typography>
            <TextField label="Enter price" fullWidth />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentBreakDown;
