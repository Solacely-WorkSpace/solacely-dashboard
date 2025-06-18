import { Typography, Paper, Box } from "@mui/material";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import { ReactComponent as PinIcon } from "../../assets/images/common/hotel.svg";

const containerStyle = {
  width: "100%",
  height: "570px",
  border: "2px solid #E6E8F0",
  borderRadius: 10,
};

const center = {
  lat: -33.8688,
  lng: 151.2093,
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        color: "#878787",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f9f5ed",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#aee0f4",
      },
    ],
  },
];

const ApartmentMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <Typography>Error loading map</Typography>;
  if (!isLoaded) return <Typography>Loading map...</Typography>;

  const options = {
    disableDefaultUI: true,
    styles: mapStyles,
  };

  return (
    <Paper elevation={3} sx={{ p: 0, boxShadow: 0 }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
      >
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <Box
            sx={{
              background: "#3DC5A1",
              width: 58,
              height: 58,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              transform: "translate(-50%, -50%)",
            }}
          >
            <PinIcon />
          </Box>
        </OverlayView>
      </GoogleMap>
    </Paper>
  );
};

export default ApartmentMap;
