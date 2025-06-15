import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as RemoveIcon } from "../../../assets/images/common/remove.svg";
import { ReactComponent as AddIcon } from "../../../assets/images/common/add.svg";

type AddapartmentDetailProps = {
  label?: string;
  placeholder?: string;
  initialCount?: number;
  onChange?: (values: string[]) => void;
};

const AddapartmentDetail: React.FC<AddapartmentDetailProps> = ({
  label = "Details",
  placeholder = "Enter detail",
  initialCount = 3,
  onChange,
}) => {
  const [details, setDetails] = useState<string[]>(
    Array(initialCount).fill("")
  );

  const handleChange = (index: number, value: string) => {
    const updated = [...details];
    updated[index] = value;
    setDetails(updated);
    onChange?.(updated);
  };

  const handleAdd = () => {
    const updated = [...details, ""];
    setDetails(updated);
    onChange?.(updated);
  };

  const handleRemove = (index: number) => {
    const updated = [...details];
    updated.splice(index, 1);
    setDetails(updated);
    onChange?.(updated);
  };

  return (
    <Box>
      <Typography
        component="label"
        sx={{
          mb: 1,
          fontWeight: "600",
          display: "block",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>

      <Grid container spacing={2}>
        {details.map((value, index) => (
          <Grid size={4} key={index}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Grid gap={1}>
                <Grid size={10}>
                  <TextField
                    fullWidth
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                </Grid>
                <Grid size={2}>
                    <IconButton
                      size="small"
                      onClick={() => handleRemove(index)}
                      sx={{ position: "absolute", top: 8, right: 0 }}
                    >
                      <RemoveIcon />
                    </IconButton>
                </Grid>
              </Grid>
              {/* <TextField
                fullWidth
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
              />
               */}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAdd}
        sx={{ mt: 2 }}
      >
        Add More
      </Button>
    </Box>
  );
};

export default AddapartmentDetail;
