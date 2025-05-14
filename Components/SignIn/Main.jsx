"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { LoginSchema } from "@/lib/utils";
import CustomInput from "../SignUp/CustomInput";
import { Button } from "../ui/button";
import SideImage from "../SignUp/SideImage";
import Link from "next/link";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Login } from "@/lib/auth";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    Login(data, setIsLoading, router);
  };

  return (
    <section className="w-full flex">
      <SideImage />
      <div className=" w-full mx-auto ">
        <div className=" flex gap-2 justify-end p-4">
          <Image src={logo} alt="logo" />
          <h1 className=" font-bold font-rob text-2xl text-purple-900">
            {" "}
            Solacely{" "}
          </h1>
        </div>
        <div className=" w-full mx-auto my-auto">
          <h1 className=" text-center text-xl font-bold mt-20">
            {" "}
            Sign in to Solacely
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" max-w-sm mx-auto mt-10 flex flex-col gap-4"
            >
              <CustomInput
                control={form.control}
                placeholder="Enter your email"
                type="email"
                name="email"
                label="Email"
              />

              <CustomInput
                control={form.control}
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
              />

              <div className=" ml-auto">
                <Link
                  href="/forgotpassword"
                  className=" text-sm text-tertially font-bold "
                >
                  Forgot Password
                </Link>
              </div>

              <Button type="submit" className=" py-5" disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Main;
