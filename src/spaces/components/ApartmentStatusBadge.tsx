import { Box, Chip } from "@mui/material";

const statusColorMap: Record<
  string,
  {
    labelColor: string;
    backgroundColor: string;
  }
> = {
  available: {
    labelColor: "#2e7d32",
    backgroundColor: "#c8e6c9",
  },
  rented: {
    labelColor: "#c62828",
    backgroundColor: "#ffcdd2",
  },
  pending: {
    labelColor: "#000",
    backgroundColor: "#ffe0b2",
  },
  unavailable: {
    labelColor: "#616161",
    backgroundColor: "#e0e0e0",
  },
};

const ApartmentStatusBadge = ({ status }: { status: string }) => {
  const statusKey = status.toLowerCase();
  const colors = statusColorMap[statusKey] || {
    labelColor: "#000",
    backgroundColor: "#eee",
  };

  return (
    <Box>
      <Chip
        sx={{
          height: 40,
          borderRadius: 2,
          fontSize: 14,
          fontWeight: 500,
          cbackgroundColor: colors.backgroundColor,
          color: colors.labelColor,
        }}
        label={status}
        size="small"
      />
    </Box>
  );
};

export default ApartmentStatusBadge;
