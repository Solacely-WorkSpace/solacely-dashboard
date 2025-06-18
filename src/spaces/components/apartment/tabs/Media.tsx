import { type FC } from "react";
import { Box, Container } from "@mui/material";
import Dropzone from "../../../../common/components/Dropzone";
import AddApartmentImages from "../../../components/apartment/AddApartmentImages";
import type { ImageType } from "../../../types/Apartment";

interface BasicInformationProps {
  handeImageUpload: (type: ImageType, files: any[]) => void;
  handeVideoUpload: (type: string, file: any) => void;
}

const Media: FC<BasicInformationProps> = ({
  handeImageUpload,
  handeVideoUpload,
}) => {
  const onVideoUpload = (type:string, file:any)  => {
    handeVideoUpload(type, file)
  }
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
        <AddApartmentImages onUpload={handeImageUpload} />
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
          onUpload={handeVideoUpload}
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
          onUpload={onVideoUpload}
          label="Upload Video"
          text="Supports MP4 format"
        />
      </Box>
    </Container>
  );
};

export default Media;
