"use client";
import { useForm } from "react-hook-form";

import { Form } from "../ui/form";
import CustomInput from "./CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import Link from "next/link";
import { RegisterSchema } from "../../schemas/register-schema";

const Auth = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <section className=" w-full flex-col">
      <p className=" flex gap-2 justify-end mr-4 text-black text-xs font-rob font-medium mb-6">
        Already have an account?{" "}
        <Link href="/sign-in" className=" text-tertially font-semibold">
          {" "}
          Sign-in{" "}
        </Link>
      </p>
      <div className=" flex justify-center items-center gap-8 mb-4">
        <Button className=" rounded-2xl shadow px-8 py-2 font-rob font-medium text-sm">
          Google
        </Button>
        <Button className=" bg-black shadow px-8 py-2 font-rob font-medium text-sm rounded-2xl">
          Facebook
        </Button>
      </div>
      <Form {...form} className=" w-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-full flex flex-col gap-4 px-8 py-4"
        >
          <CustomInput
            control={form.control}
            name="name"
            placeholder="Enter your name"
            label="Full Name"
            type="text"
          />

          <CustomInput
            control={form.control}
            name="email"
            placeholder="Enter your email"
            label="Email"
            type="email"
          />

          <CustomInput
            control={form.control}
            name="mobile"
            placeholder="Enter your mobile number"
            label="Mobile"
            type="text"
          />

          <CustomInput
            control={form.control}
            name="location"
            placeholder="Enter your location"
            label="Location"
            type="text"
          />

          <CustomInput
            control={form.control}
            name="password"
            placeholder="Enter your password"
            label="Password"
            type="password"
          />

          <CustomInput
            control={form.control}
            name="confirmPassword"
            placeholder="confirm password"
            label="Confirm-Password"
            type="password"
          />

          <Button type="submit" className=" py-6">
            {" "}
            Sign-Up{" "}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Auth;
