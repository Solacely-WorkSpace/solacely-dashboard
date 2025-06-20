import { type FC, useEffect, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addApartmentSchema } from "../../validation/addApartmentSchema";
import BasicInformation from "../../components/apartment/tabs/BasicInformation";
import Media from "../../components/apartment/tabs/Media";
import PaymentBreakDown from "../../components/apartment/tabs/PaymentBreakDown";
import ExtraInformation from "../../components/apartment/tabs/ExtraInformation";
import type { Apartment } from "../../types/Apartment";
import { apartmentService } from "../../service/ApartmentService";
import { useNavigate, useParams } from "react-router-dom";
import SPACES_ROUTES from "../../config/spacesRouteList";

const TabPanel = ({ children, value, index }: any) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

interface ApartmentImages {
  [type: string]: string[];
}

const AddApartment: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fetchApartment = async () => {
    if (!id) return;
    try {
      const { data } = await apartmentService.get(id);
      setApartment(data as Apartment);
    } catch (e) {}
  };

  useEffect(() => {
    if (id) {
      fetchApartment();
    }
  }, []);

  useEffect(() => {
    if (apartment) {
      methods.reset({
        title: apartment.title || "",
        building_type: apartment.building_type || "",
        status: apartment.status || "",
        location: apartment.location || "",
        description: apartment.description || "",
        area_size_sqm: apartment.area_size_sqm || 0,
        number_of_bedrooms: apartment.number_of_bedrooms || 0,
        number_of_bathrooms: apartment.number_of_bathrooms || 0,
        vrVideoFiles: [],
        videoFiles: [],
        images: [],
      });
    }
  }, [apartment]);

  const methods = useForm({
    resolver: yupResolver(addApartmentSchema),
    defaultValues: {
      title: "",
      price: 0,
      building_type: "",
      period: "",
      status: "",
      agent_email: "",
      location: "",
      description: "",
      area_size_sqm: 0,
      number_of_bedrooms: 0,
      number_of_bathrooms: 0,
      garage: 0,
      vrVideoFiles: [],
      videoFiles: [],
      images: [],
      homeDetails: [{ key: "" }],
      homeDefects: [{ key: "", value: "" }],
      amenities: "example amenities",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") return;

      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        formData.append(key, String(value));
      } else if (value instanceof Blob) {
        formData.append(key, value);
      } else if (value != null) {
        formData.append(key, JSON.stringify(value));
      }
    });

    Object.entries(images).forEach(([type, files]) => {
      files.forEach((file) => {
        formData.append(`images[${type}][]`, file);
      });
    });
    try {
      if (id) {
        await apartmentService.updateById(id, {
          amenities: "example amenities",
          ...formData,
        });
      } else {
        await apartmentService.create(formData);
      }
      navigate(SPACES_ROUTES.APARTMENT.PATH);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const onError = (errors: any) => {
    console.log("Validation Errors:", errors);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("event:", event);
    setTabIndex(newValue);
  };

  const [images, setImages] = useState<ApartmentImages>({});

  const handleUpload = (type: string, files: any[]) => {
    setImages((prev) => ({
      ...prev,
      [type]: [...(prev[type] || []), ...files],
    }));
    console.log("images being set", images);
  };

  const handleVideoUpload = (type: string, files: File[]) => {
    console.log("video files", type, files);
  };

  return (
    <Paper elevation={3} sx={{ px: 2, boxShadow: "none", borderRadius: 0 }}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Property
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              disabled={loading}
              sx={{
                height: 55,
                width: 90,
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                height: 55,
                width: 90,
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Save"
              )}
            </Button>
          </Box>
        </Box>

        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="standard"
          sx={{
            marginBottom: 5,
          }}
        >
          <Tab label="Basic Information" />
          <Tab label="Media" />
          <Tab label="RTO Settings" disabled />
          <Tab label="Payment Breakdown" />
          <Tab label="Additional Information" />
        </Tabs>

        {/* Basic Information */}
        <TabPanel value={tabIndex} index={0}>
          <BasicInformation methods={methods} />
        </TabPanel>

        {/* Media */}
        <TabPanel value={tabIndex} index={1}>
          <Media
            handeImageUpload={handleUpload}
            handeVideoUpload={handleVideoUpload}
          />
        </TabPanel>

        {/* RTO Settings */}
        <TabPanel value={tabIndex} index={2}></TabPanel>

        {/* Payment Breakdown */}
        <TabPanel value={tabIndex} index={3}>
          <PaymentBreakDown methods={methods} />
        </TabPanel>

        {/* Additional Information */}
        <TabPanel value={tabIndex} index={4}>
          <ExtraInformation methods={methods} />
        </TabPanel>
      </form>
    </Paper>
  );
};

export default AddApartment;
