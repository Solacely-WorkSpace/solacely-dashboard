import React, { useEffect, useState } from "react";
import { useDropzone, type Accept } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Avatar } from "@mui/material";
import { ReactComponent as DropIcon } from "../../assets/images/common/drop-icon.svg";

type DropzoneProps = {
  accept?: Accept;
  multiple?: boolean;
  onUpload: (files: File[]) => void;
  label?: string;
  text?: string;
  initialFiles?: File[];
};

const Dropzone: React.FC<DropzoneProps> = ({
  accept = { "image/*": [".png", ".jpg", ".jpeg"] },
  multiple = false,
  onUpload,
  label = "Drag and drop your file here, or click to select a file",
  text,
  initialFiles = [],
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple,
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      onUpload(acceptedFiles);
    },
  });

 useEffect(() => {
  if (
    initialFiles.length !== uploadedFiles.length ||
    initialFiles.some((file, idx) => file.name !== uploadedFiles[idx]?.name)
  ) {
    setUploadedFiles(initialFiles);
  }
}, [initialFiles, uploadedFiles]);

  return (
    <Box
      sx={{
        border: "2px dashed #E6E8F0",
        borderRadius: 2,
        padding: 3,
        textAlign: "center",
        backgroundColor: "#fff",
        width: "100%",
        margin: "auto",
        cursor: "pointer",
      }}
    >
      <Box {...getRootProps()}>
        <input {...getInputProps()} />
        <DropIcon />
        <Typography variant="body1" sx={{ mb: 2, fontSize: 14, color: '#171717', fontWeight: 600 }}>
          {label}
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, fontSize: 12, color: '#ACB1BB' }}>
          {text}
        </Typography>
      </Box>

      {uploadedFiles.length > 0 && (
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {uploadedFiles.map((file, index) => {
            const isImage = file.type.startsWith("image/");
            const preview = isImage ? URL.createObjectURL(file) : undefined;

            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: 120,
                  height: 120,
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fafafa",
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => {
                    const updated = [...uploadedFiles];
                    updated.splice(index, 1);
                    setUploadedFiles(updated);
                    onUpload(updated);
                  }}
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    backgroundColor: "#fff",
                    zIndex: 1,
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>

                {isImage ? (
                  <img
                    src={preview}
                    alt={file.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onLoad={() => URL.revokeObjectURL(preview!)}
                  />
                ) : (
                  <Avatar sx={{ width: 48, height: 48 }}>
                    <ImageIcon />
                  </Avatar>
                )}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Dropzone;
