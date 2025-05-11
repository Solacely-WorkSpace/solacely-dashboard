import Coliving from "@/Components/Listing/Coliving";
import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import React from "react";

const PAGE = () => {
  return (
    <section className=" w-full flex flex-col gap-10 ">
      <AdminInfo title={"Co-Living Space"} />
      <Coliving />
    </section>
  );
};

export default PAGE;
