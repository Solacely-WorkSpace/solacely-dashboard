import type { FC } from "react";
import { Select, TextField, Typography, MenuItem, Grid } from "@mui/material";

import { ListingStatusLabels } from "../../config/const/ListingStatusLabels.ts";
import { BuildingTypeLabels } from "../../config/const/BuildingTypeLabels.ts";

const ApartmentFilter: FC = () => {
  return (
    <Grid container spacing={5} width="70%">
      <Grid size={3}>
        <Typography
          component="label"
          sx={{
            mb: 1,
            fontWeight: "700",
            color: '#718096',
            display: "block",
            fontSize: 14
          }}
        >
          Type
        </Typography>
        <Select
          fullWidth
          id="building_type"
          sx={{
            height: 55,
          }}
        >
          {Object.entries(BuildingTypeLabels).map(([value, label]) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid size={3}>
        <Typography
          component="label"
          sx={{
            mb: 1,
            fontWeight: "700",
            color: '#718096',
            display: "block",
            fontSize: 14
          }}
        >
          Status
        </Typography>
        <Select
          fullWidth
          id="status"
          sx={{
            height: 55,
          }}
        >
          {Object.entries(ListingStatusLabels).map(([value, label]) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid size={3}>
        <Typography
          component="label"
          sx={{
            mb: 1,
            fontWeight: "700",
            color: '#718096',
            display: "block",
            fontSize: 14
          }}
        >
         Location
        </Typography>
        <TextField fullWidth placeholder="Location" />
      </Grid>

      <Grid size={3}>
        <Typography
          component="label"
          sx={{
            mb: 1,
            fontWeight: "700",
            color: '#718096',
            display: "block",
            fontSize: 14
          }}
        >
          Date
        </Typography>
        <Select
          fullWidth
          id="building_type"
          sx={{
            height: 55,
          }}
        >
          <MenuItem key={30} value={30}>
            Past 30 days
          </MenuItem>
          <MenuItem key={7} value={7}>
            Last Week
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default ApartmentFilter;
