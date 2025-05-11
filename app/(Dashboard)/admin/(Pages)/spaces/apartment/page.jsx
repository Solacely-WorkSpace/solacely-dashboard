import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import ApartmentListing from "@/Components/Listing/ApartmentListing";
import React from "react";

const page = () => {
  return (
    <section className=" w-full flex flex-col gap-10">
      <AdminInfo title={"Add New Apartment"} />
      <ApartmentListing />
    </section>
  );
};

export default page;
