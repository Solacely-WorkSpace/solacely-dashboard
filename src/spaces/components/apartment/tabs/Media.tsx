import { type FC } from "react";
import { Box, Container } from "@mui/material";
import Dropzone from "../../../../common/components/Dropzone";
import AddApartmentImages from "../../../components/apartment/AddApartmentImages";

interface BasicInformationProps {
  handeImageUpload: (image: any) => void;
}

const Media: FC<BasicInformationProps> = ({ handeImageUpload }) => {
  return (
    <Container
      sx={{
        width: "80%",
        margin: 0,
      }}
    >
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
          onUpload={handeImageUpload}
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
          onUpload={handeImageUpload}
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
          onUpload={handeImageUpload}
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
        <AddApartmentImages onUpload={handeImageUpload} />
      </Box>
    </Container>
  );
};

export default Media;
