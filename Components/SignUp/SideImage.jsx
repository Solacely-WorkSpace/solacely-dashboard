import Image from "next/image";
import React from "react";

// assets
import sideImage from "@/public/icons/Bg.svg";

const SideImage = () => {
  return (
    <div className="hidden md:block w-full ">
      <Image
        src={sideImage}
        alt="background"
        className=" object-cover w-full rounded-l-md"
      />
    </div>
  );
};

export default SideImage;
