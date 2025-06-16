import { type FC, useState } from "react";
import { Box, Tabs, Tab, Typography, Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addApartmentSchema } from "../../validation/addApartmentSchema";
import BasicInformation from "../../components/apartment/tabs/BasicInformation";
import Media from "../../components/apartment/tabs/Media";
import PaymentBreakDown from "../../components/apartment/tabs/PaymentBreakDown";
import ExtraInformation from "../../components/apartment/tabs/ExtraInformation";

const TabPanel = ({ children, value, index }: any) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const AddApartment: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

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
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const onError = (errors: any) => {
    console.log("Validation Errors:", errors);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleUpload = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleUploadImages = (key: string, files: File[]) => {};

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
              sx={{
                height: 55,
                width: 90,
              }}
            >
              Save
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
          <Media handeImageUpload={handleUpload} />
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
