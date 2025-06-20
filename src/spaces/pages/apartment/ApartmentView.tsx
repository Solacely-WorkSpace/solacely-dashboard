import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { apartmentService } from "../../service/ApartmentService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Apartment } from "../../types/Apartment";
import ApartmentDetails from "../../components/ApartmentDetails";
import { ReactComponent as LocationIcon } from "../../../assets/images/space/location.svg";
import { ReactComponent as ShareIcon } from "../../../assets/images/common/share.svg";
import { ReactComponent as CheckIcon } from "../../../assets/images/common/check.svg";
import ApartmentMap from "../../components/ApartmentMap";
import ApartmentImageViewer from "../../components/ApartmentImageViewer";

const ApartmentView = () => {
  const { id } = useParams<{ id: string }>();
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [groupedImages, setGroupedImages] = useState<Record<string, string[]>>(
    {}
  );

  const fetchApartment = async () => {
    if (!id) return;
    try {
      const response = await apartmentService.get(id);
      const data = response.data as Apartment;
      setApartment(data);
      if (data.images) {
        const grouped = transformImages(data.images);
        console.log(grouped);
        setGroupedImages(grouped);
      }
    } catch (e) {}
  };

  useEffect(() => {
    fetchApartment();
  }, []);

  const homedetails = [
    "Condo",
    "$1,044/sqft",
    "Built in1905",
    "2 Days on Oval",
    "Rooms: Dining Room",
    "Heating: Forced Air",
    "Cooling System: Central",
    "Air Condition",
    "Prepaid meter",
  ];

  const defects = [
    { name: "Kitcken Sink", value: 25000 },
    { name: "Toilet Sink", value: 25000 },
    { name: "AC Repairs", value: 25000 },
  ];

  const fees = [
    { label: "Light Fee", value: 0 },
    { label: "Security Fee", value: 1500 },
    { label: "Etsate Due", value: 2500 },
    { label: "Bin Contribution", value: 2500 },
    { label: "House Rent", value: 2500 },
  ];

  const transformImages = (
    images: {
      image_type_display: string;
      image: string;
    }[]
  ) => {
    return images.reduce((acc, img) => {
      const key = img.image_type_display;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(img.image);
      return acc;
    }, {} as Record<string, string[]>);
  };

  return (
    <Box>
      <Box
        sx={{
          marginBottom: 10,
        }}
      >
        <ApartmentImageViewer images={groupedImages} />
      </Box>
      <Paper
        sx={{
          borderRadius: 0,
          boxShadow: 0,
        }}
      >
        {apartment && (
          <Grid container spacing={10}>
            <Grid size={8}>
              <Box mb={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationIcon />
                  <Typography
                    fontSize={13}
                    sx={{
                      color: "#515151",
                    }}
                  >
                    {apartment.location}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#171717",
                    fontWeight: 700,
                    fontSize: 30,
                  }}
                >
                  {apartment.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <ApartmentDetails apartment={apartment} />
                  <Typography>
                    {" "}
                    <Typography color="#3DC5A1" fontSize={16} fontWeight={700}>
                      ₦ {apartment.price.toLocaleString()}/month
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained" color="success">
                I'm interested
              </Button>
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #E6E8EC",
                  width: 33,
                  height: 33,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                  marginTop: 3,
                  cursor: "pointer",
                }}
              >
                <ShareIcon />
              </Box>
              <Typography
                sx={{
                  color: "#515151",
                  lineHeight: "28px",
                  fontSize: 14,
                  fontWeight: 400,
                  marginTop: 3,
                }}
              >
                {apartment.description}
              </Typography>
              <Box
                sx={{
                  marginTop: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    color: "#171717",
                    fontWeight: 600,
                  }}
                >
                  Home details for {apartment.title}
                </Typography>
                <Grid container mt={2}>
                  {homedetails.map((detail) => (
                    <Grid size={4} key={detail}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        mb={2}
                      >
                        <Stack>
                          <CheckIcon />
                        </Stack>
                        <Stack>
                          <Typography>{detail}</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    color: "#171717",
                    fontWeight: 600,
                  }}
                >
                  Home Defects
                </Typography>

                <Grid container mt={2}>
                  {defects.map((defect) => (
                    <Grid size={6} key={defect.name}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        mb={2}
                      >
                        <Stack>
                          <Typography>{defect.name}:</Typography>
                        </Stack>
                        <Stack>
                          <Typography
                            color="#3DC5A1"
                            fontSize={16}
                            fontWeight={700}
                          >
                            ₦ {defect.value.toLocaleString()}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    color: "#171717",
                    fontWeight: 600,
                  }}
                >
                  Housing Agent
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    height: 58,
                    marginTop: 2.5,
                  }}
                >
                  <Avatar
                    alt={apartment.agent.toString()}
                    src="/path/to/profile.jpg"
                    sx={{ width: 46, height: 46 }}
                  />
                  <Box component="span">
                    <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
                      Mr Sandars Kemi
                    </Typography>
                    <Typography sx={{ fontSize: 13 }}>
                      Andromeda Homes Agent
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  Payment Breakdown
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#64626A",
                  }}
                >
                  The annual fees below start at zero(0) except the house rent
                </Typography>
                <Card
                  sx={{
                    mt: 3,
                    boxShadow: 0,
                    border: "1px solid #E6E8F0",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                    }}
                  >
                    {fees.map((fee, index) => (
                      <Grid container spacing={5} key={index} height={32}>
                        <Grid
                          size={4}
                          height={32}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Typography>{fee.label}</Typography>
                        </Grid>
                        <Grid size={4} height={32}>
                          <TextField
                            disabled
                            type="number"
                            defaultValue={fee.value}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                minHeight: 32,
                                padding: 0,
                                borderRadius: 1,
                                paddingLeft: 1,
                              },
                            }}
                          />
                        </Grid>
                        <Grid
                          size={4}
                          height={32}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Typography>₦{fee.value.toLocaleString()}</Typography>
                        </Grid>
                      </Grid>
                    ))}

                    <Box
                      sx={{
                        borderTop: "1px solid #F1F1F1",
                        borderBottom: "1px solid #F1F1F1",
                        padding: "15px 0",
                      }}
                    >
                      <Grid container spacing={5}>
                        <Grid size={4}></Grid>
                        <Grid size={4}>
                          <Typography>Total Amount: </Typography>
                        </Grid>
                        <Grid size={4}>
                          <Typography
                            color="#3DC5A1"
                            fontSize={16}
                            fontWeight={700}
                          >
                            ₦ {`4000000`.toLocaleString()}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box
                sx={{
                  marginTop: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Map Location
                </Typography>
                <ApartmentMap
                  latitude={Number(apartment.latitude)}
                  longitude={Number(apartment.longitude)}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Box>
  );
};

export default ApartmentView;
