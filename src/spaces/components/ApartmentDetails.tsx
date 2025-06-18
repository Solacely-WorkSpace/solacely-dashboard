import type { FC } from "react";
import type { Apartment } from "../types/Apartment";
import { Typography, Stack, Box } from "@mui/material";
import { ReactComponent as BedIcon } from "../../assets/images/space/bedroom.svg";
import { ReactComponent as BathIcon } from "../../assets/images/space/bath.svg";
import { ReactComponent as RulerIcon } from "../../assets/images/space/ruler.svg";

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentDetails: FC<ApartmentCardProps> = ({ apartment }) => {
  return (
    <Box>
      <Stack
        spacing={1}
        flexDirection={"row"}
        justifyContent="start"
        alignItems="center"
        gap={2}
        mb={1}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <BedIcon />

          <Typography
            fontSize={12}
            sx={{
              color: "#515151",
            }}
          >
            {apartment.number_of_bedrooms} Beds
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ marginTop: "0 !important" }}
        >
          <BathIcon />
          <Typography
            fontSize={12}
            sx={{
              color: "#515151",
            }}
          >
            {apartment.number_of_bathrooms} Baths
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ marginTop: "0 !important" }}
        >
          <RulerIcon />
          <Typography
            fontSize={12}
            sx={{
              color: "#515151",
            }}
          >
            {apartment.area_size_sqm ?? "—"} sqft
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ApartmentDetails;
