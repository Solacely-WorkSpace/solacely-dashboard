import { Box, ListItemIcon, Paper, Typography } from "@mui/material";
import { ReactComponent as TrendingUp } from "../../../assets/images/stats/trending-up.svg";
import { ReactComponent as TrendingDown } from "../../../assets/images/stats/trending-down.svg";
import type { FC, ReactElement } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactElement;
  trend: number;
  date: string;
}

const StatCard: FC<StatCardProps> = ({ title, value, icon, trend, date }) => {
  const isPositive = trend >= 0;

  return (
    <Paper
      sx={{
        gridColumn: "span 1",
        height: 176,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        gap: 1,
        border: "1.5px solid #E6E8F0",
        boxShadow: "none",
      }}
      elevation={3}
    >
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
          {icon}
        </ListItemIcon>
      </Box>

      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Box
          sx={{
            color: isPositive ? "success.main" : "error.main",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {isPositive ? <TrendingUp /> : <TrendingDown />}
          <Typography variant="body1" sx={{ fontSize: 14 }}>
            {trend > 0 ? `+${trend}%` : `${trend}%`}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 4,
            height: 4,
            backgroundColor: "#515151",
            borderRadius: 50,
          }}
        ></Box>
        <Typography variant="body1" sx={{ fontSize: 12, color: "#9EA0AB" }}>
          {date}
        </Typography>
      </Box>
    </Paper>
  );
};

export default StatCard;
