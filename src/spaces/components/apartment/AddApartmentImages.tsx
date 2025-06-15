import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Dropzone from "../../../common/components/Dropzone";

type AddApartmentImagesProps = {
  onUpload: (key: string, files: File[]) => void;
};

const roomTypes = ["Living Room", "Bed Room", "Bath Room", "Kitchen"];

const AddApartmentImages: React.FC<AddApartmentImagesProps> = ({
  onUpload,
}) => {
  const [selectedSection, setSelectedSection] = useState<string>("Living Room");
  const [sectionImages, setSectionImages] = useState<Record<string, File[]>>(
    {}
  );

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };

  const handleUpload = (files: File[]) => {
    setSectionImages((prev) => ({
      ...prev,
      [selectedSection]: files,
    }));
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
            key={room}
            color={selectedSection === room ? "success" : "info"}
            variant='outlined'
            onClick={() => handleSectionChange(room)}
          >
            {room}
          </Button>
        ))}
      </Stack>

      <Dropzone
        accept={{
          "image/*": [".png", ".jpg", ".jpeg"],
        }}
        multiple={true}
        onUpload={handleUpload}
        label={`Upload Images of the ${selectedSection}`}
        text="Supports Png & Jpeg"
        initialFiles={sectionImages[selectedSection] || []}
      />
    </Box>
  );
};

export default AddApartmentImages;
