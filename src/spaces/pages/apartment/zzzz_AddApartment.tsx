import { type FC, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  Container,
} from "@mui/material";
import Dropzone from "../../../common/components/Dropzone";
import AddApartmentImages from "../../components/apartment/AddApartmentImages";
import AddapartmentDetail from "../../components/apartment/AddapartmentDetail";
import AddapartmentDeffects from "../../components/apartment/AddapartmentDeffects";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addApartmentSchema } from "../../validation/addApartmentSchema";

const TabPanel = ({ children, value, index }: any) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};


const AddApartmentzzz: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const methods = useForm({
    resolver: yupResolver(addApartmentSchema),
    defaultValues: {
      title: "",
      price: 0,
      buildingType: "",
      period: "",
      availability: "",
      agent: "",
      address: "",
      details: "",
      areaSize: 0,
      bedrooms: 0,
      bathrooms: 0,
      garage: 0,
      vrVideoFiles: [],
      videoFiles: [],
      livingRoomImages: [],
      homeDetails: [{ key: "", value: "" }],
      homeDefects: [{ key: "", value: "" }],
    },
  });
  const { control, handleSubmit, register, formState } = methods;

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
    <Paper elevation={3} sx={{ p: 2, boxShadow: "none", borderRadius: 0 }}>
     <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
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
              variant="contained"
              fullWidth
              sx={{
                height: 55,
                width: 90,
                textDecoration: "none",
                backgroundColor: "transparent",
                color: "primary.main",
                borderColor: "#E6E8F0",
                borderWidth: 2,
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
          <Tab label="RTO Settings" />
          <Tab label="Payment Breakdown" />
          <Tab label="Additional Information" />
        </Tabs>

        <TabPanel
          value={tabIndex}
          index={0}
          sx={{
            border: "2px solid red",
          }}
        >
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
                    Property Title
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter Property title"
                    {...methods.register("title")}
                    error={!!methods.formState.errors.price}
                    helperText={methods.formState.errors.price?.message}
                  />
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
                    Rent Price(Only Digits)
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter price"
                    {...methods.register("price")}
                    error={!!methods.formState.errors.price}
                    helperText={methods.formState.errors.price?.message}
                  />
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
                    Building Type
                  </Typography>
                  <FormControl fullWidth>
                    <Controller
                      control={methods.control}
                      name="buildingType"
                      render={({ field }) => (
                        <Select
                          {...field}
                          fullWidth
                          id="buildingType"
                          error={!!methods.formState.errors.buildingType}
                        >
                          <MenuItem value="">Select Type</MenuItem>
                          <MenuItem value="apartment">Apartment</MenuItem>
                          <MenuItem value="house">House</MenuItem>
                          <MenuItem value="commercial">Commercial</MenuItem>
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
                    htmlFor="email-input"
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
                    <Select
                      variant="outlined"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
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
                    Property Avalilability
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      variant="outlined"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
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
                    Agent
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      variant="outlined"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={6}>
              <Grid size={12}>
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
                    Property Address
                  </Typography>
                  <TextField fullWidth placeholder="Enter Property title" />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={6}>
              <Grid size={12}>
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
                    Details
                  </Typography>
                  <TextField
                    label="Enter property details"
                    multiline
                    fullWidth
                    sx={{
                      height: 188,
                    }}
                    rows={4}
                  />
                </Box>
              </Grid>
            </Grid>

            <Box
              mb={4}
              sx={{
                width: "100%",
              }}
            >
              <Dropzone
                accept={{
                  "image/*": [".png", ".jpg", ".jpeg"],
                }}
                multiple={true}
                onUpload={handleUpload}
                label="Upload VR Video"
                text="Supports VR format"
              />
            </Box>

            <Box
              mb={4}
              sx={{
                width: "100%",
              }}
            >
              <Dropzone
                accept={{
                  "image/*": [".png", ".jpg", ".jpeg"],
                }}
                multiple={true}
                onUpload={handleUpload}
                label="Upload Video"
                text="Supports MP4 format"
              />
            </Box>

            <Box
              mb={4}
              sx={{
                width: "100%",
              }}
            >
              <Dropzone
                accept={{
                  "image/*": [".png", ".jpg", ".jpeg"],
                }}
                onUpload={handleUpload}
                label="Upload Images of the Living Room"
                text="Supports Png & Jpeg"
              />
            </Box>

            <Box
              mb={4}
              sx={{
                width: "100%",
              }}
            >
              <AddApartmentImages onUpload={handleUploadImages} />
            </Box>

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
                    Area Size (In SQ FT)
                  </Typography>
                  <TextField label="Enter size" fullWidth />
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
                    Bedrooms
                  </Typography>
                  <TextField label="Enter number of bedrooms" fullWidth />
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
                    Bathrooms
                  </Typography>
                  <TextField label="Enter number of bathrooms" fullWidth />
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
                    Garage
                  </Typography>
                  <TextField label="Enter number of parking space" fullWidth />
                </Box>
              </Grid>
              <hr />
            </Grid>

            <Box mb={2}>
              <AddapartmentDetail
                label="Home Details (Additional Details)"
                placeholder="Enter home detail"
                onChange={(values) => console.log(values)}
              />
            </Box>

            <Box mb={2}>
              <AddapartmentDeffects
                label="Home Deffects"
                keyPlaceholder="Enter title"
                valuePlaceholder="Enter value"
                initialCount={2}
                onChange={(data) => console.log(data)}
              />
            </Box>
          </Container>
        </TabPanel>

        <TabPanel value={tabIndex} index={1}></TabPanel>

        <TabPanel value={tabIndex} index={2}>
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
        </TabPanel>
      </form>
    </Paper>
  );
};

export default AddApartmentzzz;
