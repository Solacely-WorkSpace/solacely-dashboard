import {Grid } from "@mui/material";
import StatCard from "./StatCard";
import TotalProperties from "./TotalProperties";
import { ReactComponent as CustomersIcon } from "../../../assets/images/sidenav/customers.svg";
import { ReactComponent as AccountIcon } from "../../../assets/images/sidenav/account.svg";
import { ReactComponent as Partners } from "../../../assets/images/sidenav/bag.svg";

const Stats = () => {
  const stats = [
  {
    title: "Total Customers",
    value: "21,522",
    icon: <CustomersIcon />,
    trend: 2.4,
    date: "May 17, 2022",
  },
  {
    title: "Total Amount",
    value: "₦48,000,574.21",
    icon: <AccountIcon />,
    trend: -2.32,
    date: "May 17, 2022",
  },
  {
    title: "Orders Partners",
    value: "183",
    icon: <Partners />,
    trend: 2.4,
    date: "May 17, 2022",
  }
];

  return (
    <Grid
      container
      sx={{
        display: "grid",
        gap: 2,
        height: "100%",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr 1fr 2fr",
        },
      }}
    >
      {stats.map((stat, index) => (
         <StatCard
         key={index}
            title={stat.title}
           value={stat.value}
            icon={stat.icon}
           trend={stat.trend}
           date={stat.date}
          />
      ))}

      <TotalProperties />
    </Grid>
  );
};

export default Stats;
