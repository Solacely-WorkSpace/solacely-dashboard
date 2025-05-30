"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomInput from "../SignUp/CustomInput";
import { Button } from "../ui/button";
import logo from "../../public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import SideImage from "../SignUp/SideImage";
import { ForgotPasswordSchema } from "../../schemas/forgot-password-schema";

const ForgotPassword = () => {
  const form = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const PasswordReset = (data) => {
    console.log(data);
  };

  return (
    <section className=" w-full flex">
      <SideImage />

      <div className=" w-full mx-auto">
        <div className=" flex gap-2 justify-end p-4">
          <Image src={logo} alt="logo" />
          <p className=" font-rob font-bold text-2xl text-purple-900">
            {" "}
            Solacely{" "}
          </p>
        </div>
        <div className=" w-full md:max-w-sm flex mx-auto flex-col">
          <div className=" flex flex-col gap-4 mb-10 mt-20 items-center justify-center border-b pb-8 border-neutral-200">
            <h1 className=" text-xl font-bold font-rob "> Forgot Password </h1>
            <p className=" text-xs text-neutral-500 text-center">
              {" "}
              For security purposes, no withdrawals are permitted for 24 hours
              after password change{" "}
            </p>
          </div>
          <Form {...form} className=" w-full flex justify-center items-center">
            <form
              onSubmit={form.handleSubmit(PasswordReset)}
              className=" w-full flex flex-col gap-8 px-8"
            >
              <CustomInput
                control={form.control}
                placeholder="Your Email"
                label="Enter Your Account Email"
                name="email"
                type="email"
              />

              <Button type="submit " className=" py-6 w-full">
                {" "}
                Continue{" "}
              </Button>
            </form>
          </Form>
          <div className=" text-center mt-10">
            <Link href="/" className=" text-primary text-sm font-bold py-4">
              {" "}
              Never Mind, I got it.{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
