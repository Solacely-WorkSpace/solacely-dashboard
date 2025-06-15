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

type KeyValuePair = {
  key: string;
  value: string;
};

type AddapartmentDeffectsProps = {
  label?: string;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  initialCount?: number;
  onChange?: (pairs: KeyValuePair[]) => void;
};

const AddapartmentDeffects: React.FC<AddapartmentDeffectsProps> = ({
  label = "Key-Value Fields",
  keyPlaceholder = "Enter key",
  valuePlaceholder = "Enter value",
  initialCount = 1,
  onChange,
}) => {
  const [pairs, setPairs] = useState<KeyValuePair[]>(
    Array(initialCount).fill({ key: "", value: "" })
  );

  const handleChange = (
    index: number,
    field: "key" | "value",
    value: string
  ) => {
    const updated = [...pairs];
    updated[index][field] = value;
    setPairs(updated);
    onChange?.(updated);
  };

  const handleAdd = () => {
    const updated = [...pairs, { key: "", value: "" }];
    setPairs(updated);
    onChange?.(updated);
  };

  const handleRemove = (index: number) => {
    const updated = [...pairs];
    updated.splice(index, 1);
    setPairs(updated);
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

      {pairs.map((pair, index) => (
        <Grid container size={12} spacing={2} key={index} alignItems="center">
          <Grid
            container
            size={11}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid size={6}>
              <TextField
                fullWidth
                placeholder={keyPlaceholder}
                value={pair.key}
                onChange={(e) => handleChange(index, "key", e.target.value)}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                placeholder={valuePlaceholder}
                value={pair.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid size={1} display="flex" justifyContent="flex-end">
            <Box height={55}>
              <IconButton size="small" onClick={() => handleRemove(index)}>
                <RemoveIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      ))}

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

export default AddapartmentDeffects;
