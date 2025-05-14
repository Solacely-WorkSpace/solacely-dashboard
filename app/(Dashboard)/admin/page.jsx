"use client";

import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import Analytics from "@/Components/AdminDashboard/Analytics";
import LineChart from "@/Components/AdminDashboard/LineChart";
import View from "@/Components/AdminDashboard/View";
import { getUser, Logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const user = getUser();
    if (!user) {
      router.push("/");
    } else {
      setLoggedIn(user);
      console.log(user);
    }
  }, [router]);

  if (!loggedIn) return null;

  return (
    <section className="flex flex-col mx-auto gap-4 w-full">
      <AdminInfo param="dashboard" User={loggedIn} />
      <Analytics />
      <View />
      <LineChart />
    </section>
  );
};

export default AdminDashboard;
