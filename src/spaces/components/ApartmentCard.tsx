import type { FC } from "react";
import type { Apartment } from "../types/Apartment";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import PlaceholderImage from "../../assets/images/common/placeholder.png";
import { ReactComponent as BedIcon } from "../../assets/images/space/bedroom.svg";
import { ReactComponent as BathIcon } from "../../assets/images/space/bath.svg";
import { ReactComponent as RulerIcon } from "../../assets/images/space/ruler.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/space/location.svg";
import { BuildingTypeLabels } from "../config/const/BuildingTypeLabels";
import ApartmentDetails from "./ApartmentDetails";

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: FC<ApartmentCardProps> = ({ apartment }) => {
  return (
    <Card
      component={Link}
      to={`/apartments/${apartment.id}`}
      sx={{
        display: "flex",
        textDecoration: "none",
        color: "inherit",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 0,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.01)",
          color: 'unset'
        },
      }}
    >
      <CardMedia
        component="img"
        image={PlaceholderImage}
        alt={apartment.title}
        sx={{ width: 255, height: 150, objectFit: "cover", borderRadius: 2 }}
      />
      <CardContent sx={{height: 150, paddingTop:0}}>
        <Box sx={{ height: 150, display: "flex", flexDirection: "column", justifyContent: 'space-between' }}>
          <Box>
            <Typography color="text.secondary" fontSize={12}>
              {BuildingTypeLabels[apartment.building_type]} |{" "}
              {apartment.location}
            </Typography>
            <Typography fontSize={18} fontWeight={700}>
              {apartment.title}
            </Typography>

            <ApartmentDetails apartment={apartment}/>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationIcon />
              <Typography
                fontSize={12}
                sx={{
                  color: "#515151",
                }}
              >
                {apartment.location}
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography color="#3DC5A1" fontSize={16} fontWeight={600}>
              ₦ {apartment.price.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ApartmentCard;
