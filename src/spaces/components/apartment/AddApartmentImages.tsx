import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Dropzone from "../../../common/components/Dropzone";
import type { ImageType } from "../../types/Apartment";
import { ImageTypeLabels } from "../../config/const/ImageTypeLabels";

type AddApartmentImagesProps = {
  onUpload: (key: ImageType, files: File[]) => void;
};

const roomTypes: { type: ImageType; label: string }[] = [
  {
    type: "living_room",
    label: "Living Room",
  },
  {
    type: "bedroom",
    label: "Bedroom",
  },

  {
    type: "bathroom",
    label: "Bathroom",
  },

  {
    type: "kitchen",
    label: "Kitchen",
  },

];

const AddApartmentImages: React.FC<AddApartmentImagesProps> = ({
  onUpload,
}) => {
  const [selectedSection, setSelectedSection] = useState<ImageType>("living_room");
  const [sectionImages, setSectionImages] = useState<Record<string, File[]>>(
    {}
  );

  const handleSectionChange = (section: ImageType) => {
    setSelectedSection(section);
  };

  const handleUpload = (files: File[]) => {
    setSectionImages((prev) => ({
      ...prev,
      [selectedSection]: files,
    }));
    console.log('sectionImages', sectionImages);
    onUpload(selectedSection, files);
  };

  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 3, flexWrap: "wrap", justifyContent: "center" }}
      >
        {roomTypes.map((room) => (
          <Button
            key={room.type}
            color={selectedSection === room.type ? "success" : "info"}
            variant="outlined"
            onClick={() => handleSectionChange(room.type)}
          >
            {room.label}
          </Button>
        ))}
      </Stack>

      <Dropzone
        accept={{
          "image/*": [".png", ".jpg", ".jpeg"],
        }}
        multiple={true}
        onUpload={handleUpload}
        label={`Upload Images of the ${ImageTypeLabels[selectedSection]}`}
        text="Supports Png & Jpeg"
        initialFiles={sectionImages[selectedSection] || []}
      />
    </Box>
  );
};

export default AddApartmentImages;
