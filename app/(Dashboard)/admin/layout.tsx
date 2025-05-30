"use client";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import AdminInfo from "../../../Components/AdminDashboard/AdminInfo";
import Loading from "../../../Components/Loader/Loading";
import { getUser } from "../../../lib/auth";

export default function RootLayout({ children }) {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const user = getUser();

    if (!user) {
      router.push("/");
    } else {
      setLoggedIn(user);
      console.log(user);
    }
  }, [router]);

  if (!loggedIn) return <Loading />;

  return (
    <main className=" flex flex-col gap-10 w-full ">
      <AdminInfo User={loggedIn} />
      {children}
    </main>
  );
}
