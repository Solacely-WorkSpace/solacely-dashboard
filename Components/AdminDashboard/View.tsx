"use client";

import Chart from "./Chart";
import Listing from "./Listing";

const View = () => {
  return (
    <section className=" container overflow-clip mx-auto flex flex-wrap-reverse  justify-center items-baseline gap-8 py-4 px-2">
      <Listing />
      <Chart />
    </section>
  );
};

export default View;
