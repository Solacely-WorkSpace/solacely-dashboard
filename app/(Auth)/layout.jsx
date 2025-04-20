"use client";
import SideImage from "@/Components/SignUp/SideImage";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isSignIn = pathname.includes("sign-in");
  return (
    <main className=" w-full mx-auto flex flex-col items-center justify-center bg-white">
      {isSignIn ? (
        <h1 className=" font-bold font-rob text-2xl mt-10">
          {" "}
          Sign in to Solacely{" "}
        </h1>
      ) : (
        <div className=" flex flex-col gap-4 w-full justify-center items-center mt-10">
          <h1 className=" text-2xl font-bold font-rob ">Getting Started</h1>
          <p className=" text-slate-400 text-sm font-rob italic">
            {" "}
            Please fill in the form below to create an account
          </p>
        </div>
      )}
      <div className=" w-full md:max-w-[800px] lg:max-w-[1000px] flex items-center justify-center mt-10 ">
        <SideImage />
        {children}
      </div>
    </main>
  );
}
