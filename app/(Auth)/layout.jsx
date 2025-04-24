"use client";
import SideImage from "@/Components/SignUp/SideImage";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isSignIn = pathname.includes("forgotpassword");
  return (
    <main className=" w-full mx-auto flex flex-col items-center justify-center bg-white">
      {!isSignIn ? (
        <h1 className=" font-bold font-rob text-2xl mt-10">
          {" "}
          Sign in to Solacely{" "}
        </h1>
      ) : (
        <div className=" flex flex-col justify-center items-center gap-4">
          <h1 className=" font-bold font-rob text-3xl mt-10">
            {" "}
            Forgot Password{" "}
          </h1>
          <p className=" font-medium text-lg text-gray-400 italic">
            For security purposes, no withdrawal are permitted for 24 hours
            after passsword change
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
