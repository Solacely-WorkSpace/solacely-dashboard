import { shortName } from "@/lib/utils";
import Image from "next/image";
import { SidebarTrigger } from "../ui/sidebar";

// assets

import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AdminInfo = ({ User }) => {
  const user = User.user;

  return (
    <div className="container flex justify-between w-full bg-white h-fit items-center py-4">
      <div className=" flex items-center gap-1">
        <div className=" font-rob flex flex-col gap-0.5">
          <h2 className=" font-bold text-md ">Hi, {user.username}</h2>
          <p className=" text-slate-400 font-semibold text-md ">Welcome Back</p>
        </div>
      </div>

      <div className=" flex gap-4 md:gap-8 items-center">
        <FaBell className=" text-slate-400" />
        <article className=" flex flex-nowrap gap-1 items-center">
          {user.profile_image !== null ? (
            <Image
              src={User.user.profile_image}
              alt="user pic"
              width={48}
              height={48}
              className=" w-8 md:w-12"
            />
          ) : (
            <span aria-label="Profile_pic">
              <FaUserCircle size={32} />
            </span>
          )}

          <span className=" font-bold hidden md:block">
            {" "}
            {shortName(user.full_name || "")}
          </span>
        </article>
        <MdOutlineKeyboardArrowDown className="" />
      </div>
    </div>
  );
};

export default AdminInfo;
