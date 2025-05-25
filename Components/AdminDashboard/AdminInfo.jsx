"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn, shortName } from "@/lib/utils";
import UserImage from "./UserImage";

// assets

import { FaBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "../ui/button";
import { Logout } from "@/lib/auth";
import { toast } from "react-toastify";

const AdminInfo = ({ User }) => {
  const user = User.user;

  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClick = () => {
    Logout(router);
  };

  return (
    <div className="container flex justify-between w-full bg-white h-fit items-center py-4">
      <div className=" flex items-center gap-1">
        <div className=" font-rob flex flex-col gap-0.5">
          <h2 className=" font-bold text-md ">Hi, {user.username}</h2>
          <p className=" text-slate-400 font-semibold text-md ">Welcome Back</p>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <div className=" flex gap-4 md:gap-8 items-center">
          <FaBell className=" text-slate-400" />
          <article className=" flex flex-nowrap gap-1 items-center">
            <UserImage />

            <span className=" font-bold hidden md:block">
              {" "}
              {shortName(user.full_name || "")}
            </span>
          </article>
          <MdOutlineKeyboardArrowDown
            className={`rotate-180 transition-all duration-300 ${
              show ? "rotate-none" : ""
            }`}
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>
        <div
          className={`p-1 bg-neutral-100 flex flex-col items-center gap-2 transition-all duration-300 ease-in-out ${
            show ? "block" : "hidden"
          }`}
        >
          <Button
            className={cn(
              " w-full bg-transparent text-neutral-600 text-[0.65rem] font-medium py-1 px-4 rounded-none shadow-none hover:bg-neutral-300 cursor-pointer  "
            )}
            onClick={handleClick}
          >
            {" "}
            LogOut{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
