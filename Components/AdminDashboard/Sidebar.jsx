"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "../ui/sidebar";

import Image from "next/image";

// assets
import pic from "@/public/icons/curl.svg";
import logo from "@/public/icons/logo.svg";
import SidebarInfo from "./SidebarInfo";
import { useUser } from "@/Context/UserData";
import { shortName } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loading from "../Loader/Loading";

const CollapsibleSide = () => {
  const { user } = useUser();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <Loading />;

  const name = user?.user?.full_name;
  const email = user?.user?.email;

  return (
    <Sidebar collapsible="icon" className="sm:w-14 md:w-64">
      <SidebarHeader className="overflow-clip">
        <div className=" flex items-center gap-2 py-4 px-8">
          <Image src={logo} alt="logo" />
          <p className=" font-rob text-primary text-2xl font-bold">Solacely</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarInfo />
      </SidebarContent>
      <SidebarFooter>
        <div className=" flex gap-2 p-2">
          <figure className=" aspect-square rounded-full max-w-12 ring-1 ring-slate-300 shadow-md p-0.5">
            <Image
              src={pic}
              alt="user pic"
              className=" object-cover aspect-square rounded-full blur-none "
            />
          </figure>
          <article className=" flex-1 flex flex-col justify-center items-start gap-1 w-1/2 text-ellipsis overflow-clip">
            <p className=" text-sm text-slate-400 font-semibold font-rob">
              {user && shortName(name)}{" "}
            </p>
            <p className=" text-sm text-slate-400 font-semibold font-rob ">
              {user && email}
            </p>
          </article>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CollapsibleSide;
