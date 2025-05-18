import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import CollapsibleSide from "@/Components/AdminDashboard/Sidebar";
import { UserData } from "@/Context/UserData";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <CollapsibleSide />
      <>
        <SidebarTrigger className=" shadow-none bg-slate-100 text-black hover:bg-transparent hover:scale-90 hover:shadow-none cursor-pointer p-0  " />
        <UserData>{children}</UserData>
      </>
    </SidebarProvider>
  );
}
