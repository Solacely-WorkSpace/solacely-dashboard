import React from "react";
import eclipse from "@/public/icons/eclipse.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <div className=" flex flex-col gap-1 items-center absolute left-1/2 top-1/2 -translate-1/2">
      <Image src={eclipse} alt="loader" />
      <p className=" text-xl text-primary font-bold"> Solacely </p>
    </div>
  );
};

export default Loading;
