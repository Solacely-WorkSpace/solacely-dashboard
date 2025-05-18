import ApartmentListing from "@/Components/Listing/ApartmentListing";
import React from "react";

const page = () => {
  return (
    <section className=" w-full flex flex-col gap-10">
      <ApartmentListing />
    </section>
  );
};

export default page;
