// assets
import { MdGroups3 } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { BiSolidWalletAlt } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";
import { FaArrowTrendDown, FaArrowTrendUp, FaCircle } from "react-icons/fa6";
import { CurrencyFormatter } from "@/lib/utils";

const Analytics = () => {
  return (
    <section className=" w-full flex flex-col  px-4 py-4 mx-auto ">
      <div className=" container flex flex-wrap md:flex-nowrap gap-2 mx-auto">
        <article className="  flex flex-col gap-2 p-4 border-2 border-neutral-200 w-full md:max-w-[20%] h-fit rounded-md">
          <div className=" bg-emerald-100 rounded-full p-2 w-fit">
            <MdGroups3 size={28} className=" text-emerald-400 " />
          </div>
          <h4 className=" text-neutral-400 text-[1rem] font-rob whitespace-nowrap">
            {" "}
            Total Customers{" "}
          </h4>
          <h2 className=" text-[1rem] font-bold font-rob "> 21,000 </h2>
          <div className=" flex gap-2">
            <div className=" flex items-center gap-2">
              <FaArrowTrendUp className=" text-emerald-500" />
              <span className=" text-emerald-500 text-[0.8rem] font-medium">
                {" "}
                + 2.4{" "}
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <FaCircle size={4} className=" text-neutral-400" />
              <p className=" text-neutral-400 text-[0.8rem] whitespace-nowrap">
                {" "}
                May 2024
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-2 p-4 border-2 border-neutral-200 rounded-md w-full md:max-w-[20%] h-fit ">
          <div className="bg-emerald-100 p-2 rounded-full w-fit">
            <BiSolidWalletAlt size={28} className=" text-emerald-400 " />
          </div>
          <h4 className=" text-neutral-400 font-rob whitespace-nowrap text-[1rem]">
            {" "}
            Total Transaction{" "}
          </h4>
          <h2 className=" font-bold font-rob text-[1rem]">
            {" "}
            {CurrencyFormatter(480005421)}{" "}
          </h2>
          <div className=" flex gap-2 flex-nowrap">
            <div className=" flex items-center gap-1">
              <FaArrowTrendDown className=" font-bold text-rose-600 rotate-90 rotate-z-12" />
              <p className=" text-rose-600 text-[0.8rem] whitespace-nowrap font-medium">
                {" "}
                + 1.7{" "}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <FaCircle size={4} className=" text-neutral-400" />
              <p className=" text-[0.8rem] text-neutral-400 whitespace-nowrap">
                {" "}
                April 2024
              </p>
            </div>
          </div>
        </article>

        <article className=" flex flex-col gap-2 p-4 border-2 border-neutral-200 rounded-md w-full md:max-w-[20%] h-fit">
          <div className=" bg-emerald-100 rounded-full p-2 w-fit">
            <FaBriefcase size={28} className=" text-emerald-400 " />
          </div>
          <h4 className=" text-[1rem] text-neutral-400 font-rob">
            {" "}
            Total Partners{" "}
          </h4>
          <h2 className=" text-[1rem] font-rob font-bold"> 183 </h2>

          <div className=" flex gap-2 items-center">
            <div className=" flex gap-2 items-center">
              <FaArrowTrendUp className=" text-emerald-500" />
              <span className=" text-emerald-500 font-medium text-[0.8rem]">
                + 2.4
              </span>
            </div>
            <div className=" flex gap-2 items-center">
              <FaCircle size={4} className=" text-neutral-400" />
              <p className=" text-[0.8rem] text-neutral-400"> May 2024</p>
            </div>
          </div>
        </article>

        <article className=" flex-1 flex flex-col justify-between p-4 border-2 border-neutral-200 rounded-md">
          <div className=" flex justify-between items-start">
            <div>
              <h4 className=" text-[0.8rem] text-neutral-400 font-rob">
                {" "}
                Total Properties{" "}
              </h4>
              <h2 className=" font-bold text-[1rem] font-rob"> 184 </h2>
            </div>
            <div className=" bg-emerald-100 rounded-full p-2 ">
              <RiHome5Fill size={28} className=" text-emerald-400" />
            </div>
          </div>

          <div className=" flex justify-between font-rob text-[0.8rem] text-neutral-400">
            <div>
              <h4> Apartment </h4>
              <h2 className="text-black font-medium text-[1rem]"> 20 </h2>
            </div>
            <div>
              <h4> Co-Working </h4>
              <h2 className=" text-black font-medium text-[1rem]"> 20 </h2>
            </div>
            <div>
              <h4> Hotel </h4>
              <h2 className=" text-black font-medium text-[1rem]"> 0 </h2>
            </div>
            <div>
              <h4> Real Estate </h4>
              <h2 className=" text-black font-medium text-[1rem]"> 20 </h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Analytics;
