import { type FC } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Container,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { BuildingTypeLabels } from "../../../config/const/BuildingTypeLabels";
import { ListingStatusLabels } from "../../../config/const/ListingStatusLabels";
import { NumericFormat } from "react-number-format";

interface BasicInformationProps {
  methods: any;
}

/**
 * 
 * @param param0 
 * @returns 
 "Property Title": "title" -- done,
  "Rent Price": "price", --done
  "Building Type": "building_type" -- done,
  "Period": TBD,
  "Property Availability": Property Status -- done,
  "Agent": "agent_email",
  "Property Address": "location", --done
  "Details": "description" --done
  "Area": "area_size_sqm"
  "Bedrooms": "number_of_bedrooms"
  "Bathrooms": "number_of_bathrooms",
  "Garage": "TBD"

  Not saving
  "agent_email",
  ""
 */

const BasicInformation: FC<BasicInformationProps> = ({ methods }) => {
  const agents = [
    { name: "Jon Doe", email: "lawknchi2yahoo.com" },
    { name: "Mary Jane", email: "lawknchi2yahoo.com" },
  ];
  return (
    <Container
      sx={{
        width: "80%",
        margin: 0,
        padding: "0 !Important",
      }}
    >
      <Grid container spacing={6}>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Property Title
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Property title"
              {...methods.register("title")}
              error={!!methods.formState.errors.title}
              helperText={methods.formState.errors.title?.message}
            />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Rent Price(Only Digits)
            </Typography>

            <Controller
              name="price"
              control={methods.control}
              render={({ field }) => (
                <NumericFormat
                  {...field}
                  customInput={TextField}
                  fullWidth
                  placeholder="Enter price"
                  thousandSeparator
                  valueIsNumericString
                  prefix="₦"
                  error={!!methods.formState.errors.price}
                  helperText={methods.formState.errors.price?.message}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                />
              )}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Building Type
            </Typography>
            <FormControl fullWidth>
              <Controller
                control={methods.control}
                name="building_type"
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    id="building_type"
                    error={!!methods.formState.errors.building_type}
                    sx={{
                      height: 55,
                    }}
                  >
                    {Object.entries(BuildingTypeLabels).map(
                      ([value, label]) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      )
                    )}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Period
            </Typography>
            <FormControl fullWidth>
              <Controller
                control={methods.control}
                name="status"
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    id="status"
                    error={!!methods.formState.errors.status}
                    sx={{
                      height: 55,
                    }}
                  >
                    <MenuItem value="">Select Type</MenuItem>
                    {Object.entries(ListingStatusLabels).map(
                      ([value, label]) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      )
                    )}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Property Avalilability
            </Typography>
            <FormControl fullWidth>
              <Controller
                control={methods.control}
                name="status"
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    id="status"
                    error={!!methods.formState.errors.status}
                    sx={{
                      height: 55,
                    }}
                  >
                    {Object.entries(ListingStatusLabels).map(
                      ([value, label]) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      )
                    )}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Agent
            </Typography>
            <Controller
              control={methods.control}
              name="agent_email"
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                  id="agent_email"
                  error={!!methods.formState.errors.agent_email}
                  sx={{
                    height: 55,
                  }}
                >
                  {agents.map((agent) => (
                    <MenuItem key={agent.email} value={agent.email}>
                      {agent.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid size={12}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Property Address
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter property address"
              {...methods.register("location")}
              error={!!methods.formState.errors.location}
              helperText={methods.formState.errors.location?.location}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid size={12}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Details
            </Typography>
            <TextField
              {...methods.register("description")}
              error={!!methods.formState.errors.description}
              helperText={methods.formState.errors?.description}
              multiline
              fullWidth
              placeholder="Enter property details"
              rows={6}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Area Size (In SQ FT)
            </Typography>
            <TextField
              placeholder="Enter size"
              type="number"
              fullWidth
              {...methods.register("area_size_sqm")}
              error={!!methods.formState.errors.area_size_sqm}
              helperText={methods.formState.errors?.area_size_sqm}
            />
          </Box>
        </Grid>

        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Bedrooms
            </Typography>
            <TextField
              type="number"
              placeholder="Enter number of bedrooms"
              fullWidth
              {...methods.register("number_of_bedrooms")}
              error={!!methods.formState.errors.number_of_bedrooms}
              helperText={methods.formState.errors?.number_of_bedrooms}
            />
          </Box>
        </Grid>

        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Bathrooms
            </Typography>
            <TextField
              type="number"
              placeholder="Enter number of bathrooms"
              fullWidth
              {...methods.register("number_of_bathrooms")}
              error={!!methods.formState.errors.number_of_bathrooms}
              helperText={methods.formState.errors.price?.number_of_bathrooms}
            />
          </Box>
        </Grid>

        <Grid size={6}>
          <Box>
            <Typography
              component="label"
              sx={{
                mb: 1,
                fontWeight: "600",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Garage
            </Typography>
            <TextField
              type="number"
              placeholder="Enter number of parking space"
              fullWidth
            />
          </Box>
        </Grid>
        <hr />
      </Grid>
    </Container>
  );
};

export default BasicInformation;
