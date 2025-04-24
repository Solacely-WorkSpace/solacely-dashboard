import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import Analytics from "@/Components/AdminDashboard/Analytics";
import LineChart from "@/Components/AdminDashboard/LineChart";
import View from "@/Components/AdminDashboard/View";
import React from "react";

const AdminDashboard = () => {
  return (
    <section className="flex flex-col mx-auto gap-4 w-full">
      <AdminInfo param="dashboard" />
      <Analytics />
      <View />
      <LineChart />
    </section>
  );
};

export default AdminDashboard;
