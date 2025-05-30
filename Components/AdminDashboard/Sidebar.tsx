"use client";
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";

import Image from "next/image";

// assets

import logo from "@/public/icons/logo.svg";
import SidebarInfo from "./SidebarInfo";

import { useEffect, useState } from "react";
import Loading from "../Loader/Loading";
import { useUser } from "../../Context/UserData";


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
    </Sidebar>
  );
};

export default CollapsibleSide;
