import Image from "next/image";
import React from "react";

// Assets
import { MdOutlineKeyboardArrowRight, MdLocationPin } from "react-icons/md";
import banana from "@/public/images/banana.png";
import island from "@/public/images/island.png";
import bn from "@/public/images/bnb.png";
import meterRule from "@/public/icons/ruler-fill.svg";
import bath from "@/public/icons/bath.svg";
import bed from "@/public/icons/bed.svg";

const Listing = () => {
  return (
    <section className=" flex-1 px-2 py-4 md:px-8 mx-auto border border-slate-300 rounded-md ">
      <div className=" flex flex-col gap-8">
        <div className=" flex justify-between font-rob">
          <h4 className=" font-semibold "> Recently listed property </h4>
          <article className=" flex gap-4 ">
            <p className=" font-medium text-[0.8rem]"> View all </p>
            <MdOutlineKeyboardArrowRight />
          </article>
        </div>

        <div className=" flex flex-col gap-4 ">
          <article className=" flex flex-wrap gap-4 border-b border-b-neutral-200 py-4">
            <Image
              src={banana}
              alt="banana island"
              className=" w-full md:max-w-[35%]  rounded-md"
            />
            <div className=" flex-1 flex flex-col gap-2 font-rob">
              <h5 className=" text-[0.7rem] text-neutral-400 ">
                {" "}
                Apartment | Lagos{" "}
              </h5>
              <h2 className=" font-semibold text-[1rem]">
                {" "}
                Luxury 3 Bedroom Apartment at Epicentrum{" "}
              </h2>
              <div className=" flex gap-8 items-start ">
                <div className=" flex gap-1 ">
                  <Image src={bed} alt="bed" />
                  <p className=" text-[0.8rem] "> 3 Bed </p>
                </div>
                <div className=" flex gap-1">
                  <Image src={bath} alt="bath" />
                  <p className=" text-[0.8rem] "> 1 Bath</p>
                </div>
                <div className=" flex gap-2">
                  <Image src={meterRule} alt="meter" />
                  <p className=" text-[0.8rem] "> 8,725sqft </p>
                </div>
              </div>
              <div className=" flex gap-4 ">
                <MdLocationPin className=" text-neutral-600" />
                <p className=" text-[0.8rem] text-neutral-600 ">
                  {" "}
                  1998 Wufma Minnessota, Festac{" "}
                </p>
              </div>
              <h3 className=" text-lg text-tertially font-medium mt-4">
                {" "}
                ₦24,000,000/ Year{" "}
              </h3>
            </div>
          </article>

          <article className=" flex gap-4 border-b border-b-neutral-200 py-4">
            <Image
              src={bn}
              alt="banana island"
              className=" w-full md:max-w-[35%] rounded-md"
            />
            <div className=" flex-1 flex flex-col gap-2">
              <h5 className=" text-[0.7rem] text-neutral-400 ">
                {" "}
                Apartment | Lagos{" "}
              </h5>
              <h2 className=" text-[1rem] font-medium">
                {" "}
                Luxury 3 Bedroom Apartment at Epicentrum{" "}
              </h2>
              <div className=" flex items-start gap-8">
                <div className=" text-[0.8rem] flex gap-1">
                  <Image src={bed} alt="bed" />
                  <p> 3 Bed </p>
                </div>
                <div className=" flex gap-1 text-[0.8rem]">
                  <Image src={bath} alt="bath" />
                  <p> 1 Bath</p>
                </div>
                <div className=" flex gap-1 text-[0.8rem]">
                  <Image src={meterRule} alt="meter" />
                  <p> 8,725sqft </p>
                </div>
              </div>
              <div className=" flex gap-4 text-neutral-600 items-start">
                <MdLocationPin />
                <p className=" font-rob text-[0.8rem]">
                  {" "}
                  1998 Wufma Minnessota, Festac{" "}
                </p>
              </div>
              <h3 className=" text-tertially text-lg font-medium mt-4">
                {" "}
                ₦24,000,000/ Year{" "}
              </h3>
            </div>
          </article>

          <article className=" flex gap-4 border-b border-b-neutral-200 py-4">
            <Image
              src={island}
              alt="banana island"
              className=" w-full md:max-w-[35%] rounded-md"
            />
            <div className=" flex flex-col gap-2">
              <h5 className=" text-[0.7rem] text-neutral-400">
                {" "}
                Apartment | Lagos{" "}
              </h5>
              <h2 className=" text-[1rem] font-medium">
                {" "}
                Luxury 3 Bedroom Apartment at Epicentrum{" "}
              </h2>
              <div className=" flex gap-8 text-[0.8rem]">
                <div className=" flex gap-2">
                  <Image src={bed} alt="bed" />
                  <p> 3 Bed </p>
                </div>
                <div className=" flex gap-2">
                  <Image src={bath} alt="bath" />
                  <p> 1 Bath</p>
                </div>
                <div className=" flex gap-2">
                  <Image src={meterRule} alt="meter" />
                  <p> 8,725sqft </p>
                </div>
              </div>
              <div className=" flex gap-4 text-neutral-600 ">
                <MdLocationPin />
                <p className=" text-[0.8rem] font-rob">
                  {" "}
                  1998 Wufma Minnessota, Festac{" "}
                </p>
              </div>
              <h3 className=" text-lg text-tertially font-medium mt-4">
                {" "}
                ₦24,000,000/ Year{" "}
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Listing;
