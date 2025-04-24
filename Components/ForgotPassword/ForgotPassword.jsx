"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomInput from "../SignUp/CustomInput";
import { Button } from "../ui/button";
import { ForgotPasswordSchema } from "@/lib/utils";
import logo from "@/public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

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
    <section className=" w-full items-center justify-center">
      <div className=" flex gap-2 justify-center items-center mb-32">
        <Image src={logo} alt="logo" />
        <p className=" font-rob font-bold text-2xl text-black "> Solacely </p>
      </div>
      <Form {...form} className=" w-full flex justify-center items-center">
        <form
          onSubmit={form.handleSubmit(PasswordReset)}
          className=" w-full flex flex-col gap-8 px-8"
        >
          <CustomInput
            control={form.control}
            placeholder="Enter your email"
            label="Email"
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
    </section>
  );
};

export default ForgotPassword;
