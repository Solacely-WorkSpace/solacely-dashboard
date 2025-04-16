// assets
import { MdGroups3 } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { BiSolidWalletAlt } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";
import { PiTrendUpLight, PiTrendDownLight } from "react-icons/pi";
import { CurrencyFormatter } from "@/lib/utils";

const Analytics = () => {
  return (
    <section className=" w-full flex flex-col  px-4 py-4 mx-auto ">
      <div className=" container flex gap-10 flex-wrap mx-auto">
        <article className="  flex flex-col gap-4 border border-slate-300 px-4 py-4 w-full  md:max-w-[300px] rounded">
          <div className=" bg-green-100 rounded-full p-2 -ml-2">
            <MdGroups3 size={28} className=" text-green-400 " />
          </div>
          <h4 className=" text-slate-400 text-lg font-rob">
            {" "}
            Total Customers{" "}
          </h4>
          <h2 className=" text-lg font-bold font-mont "> 21,000 </h2>
          <div className=" flex gap-2">
            <PiTrendUpLight className=" text-green-500 mt-3" />
            <span className=" text-green-500 mt-2"> + 2.4 </span>
            <span className=" font-bold text-lg text-black"> . </span>
            <p className=" text-sm text-slate-400 font-rob mt-3"> May 2024</p>
          </div>
        </article>

        <article className="flex flex-col gap-4 border border-slate-300 p-4 rounded w-full md:max-w-[300px]">
          <div className="bg-green-100 p-2 rounded-full -ml-2">
            <BiSolidWalletAlt size={28} className=" text-green-400 " />
          </div>
          <h4 className=" text-lg text-slate-400 font-rob">
            {" "}
            Total Transaction{" "}
          </h4>
          <h2 className=" font-bold font-rob text-lg">
            {" "}
            {CurrencyFormatter(480005421)}{" "}
          </h2>
          <div className=" flex gap-2">
            <PiTrendDownLight className=" text-red-500 mt-3" />
            <span className=" text-red-500 mt-2"> + 1.7 </span>
            <span className=" text-lg font-bold font-rob "> . </span>
            <p className=" text-slate-400 text-sm mt-3"> April 2024</p>
          </div>
        </article>

        <article className=" flex flex-col gap-4 border border-slate-300 py-4 px-8 rounded w-full  md:max-w-[300px]">
          <div className=" bg-green-100 rounded-full p-2 -ml-2">
            <FaBriefcase size={28} className=" text-green-400 " />
          </div>
          <h4 className=" text-lg text-slate-400 font-rob"> Total Partners </h4>
          <h2 className=" text-lg font-mont font-bold"> 183 </h2>
          <div className=" flex gap-2 items-center">
            <PiTrendUpLight className=" text-green-500 mt-3" />
            <span className=" text-green-500 mt-2"> + 2.4 </span>
            <span className=" text-lg font-bold "> . </span>
            <p className=" text-slate-400 mt-2 font-rob"> May 2024</p>
          </div>
        </article>

        <article className=" flex-1 flex flex-col gap-10 border border-slate-300 px-4 py-8 rounded">
          <div className=" flex justify-between">
            <div className=" leading-7">
              <h4 className=" text-sm text-slate-400 font-rob">
                {" "}
                Total Properties{" "}
              </h4>
              <h2 className=" font-bold text-md font-mont"> 184 </h2>
            </div>
            <div className=" bg-green-100 rounded-full p-2 ">
              <RiHome5Fill size={28} className=" text-green-400" />
            </div>
          </div>

          <div className=" flex flex-wrap md:flex-nowrap gap-10 font-rob text-[1rem] text-slate-400">
            <div className=" leading-7">
              <h4> Apartment </h4>
              <h2 className="text-black font-bold"> 20 </h2>
            </div>
            <div className=" leading-7">
              <h4> Co-Working </h4>
              <h2 className=" text-black font-bold"> 20 </h2>
            </div>
            <div className="leading-7">
              <h4> Hotel </h4>
              <h2 className=" text-black font-bold"> 0 </h2>
            </div>
            <div className=" leading-7">
              <h4> Real Estate </h4>
              <h2 className=" text-black font-bold"> 20 </h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Analytics;
