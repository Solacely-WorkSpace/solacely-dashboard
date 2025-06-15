import { Box, ListItemIcon, Paper, Typography } from "@mui/material";
import { ReactComponent as HomeIcon } from "../../../assets/images/sidenav/spaces.svg";

const TotalProperties = () => {
  const stats = [
    {
      title: "Apartment",
      value: 24,
    },
    {
      title: "Co-Working",
      value: 24,
    },
    {
      title: "Hotel",
      value: 24,
    },
    {
      title: "Realestate",
      value: 24,
    },
  ];
  return (
    <Paper
      sx={{
        gridColumn: "4 / 5",
        height: 176,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        flexDirection: 'column',
        border: "1.5px solid #E6E8F0",
        boxShadow: "none",
      }}
      elevation={3}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" sx={{ fontSize: 14 }}>
            Total Properties
          </Typography>
          <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 700 }}>
            48
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#E9FFF9",
            width: 42,
            height: 42,
            borderRadius: 50,
            padding: "9px",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              color: "success.main",
              justifyContent: "center",
            }}
          >
            <HomeIcon />
          </ListItemIcon>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >
        {stats.map((stat, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{fontSize: 14}}>{stat.title}</Typography>
            <Typography variant="h6" sx={{fontSize: 16, fontWeight: 700}}>{stat.value}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default TotalProperties;
