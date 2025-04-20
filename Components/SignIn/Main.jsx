"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { LoginSchema } from "@/lib/utils";
import CustomInput from "../SignUp/CustomInput";
import { Button } from "../ui/button";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const Login = (data) => {
    console.log(data);
  };

  return (
    <section className=" w-full relative">
      <div className=" flex gap-2 justify-center items-center mb-36 mr-8">
        <Image src={logo} alt="logo" />
        <h1 className=" font-bold font-rob text-2xl"> Solacely </h1>
      </div>

      <Form {...form} className=" w-full">
        <form
          onSubmit={form.handleSubmit(Login)}
          className=" w-full flex flex-col gap-8 px-8"
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

          <div className=" flex justify-between items-center mb-4 px-2">
            <p className=" flex gap-2 text-slate-400 text-sm font-rob font-medium">
              {" "}
              Don't have an account?{" "}
              <Link href="/" className=" text-tertially font-bold">
                {" "}
                Signup{" "}
              </Link>
            </p>
            <Link
              href="/forgotpassword"
              className=" text-sm text-tertially font-bold "
            >
              Forgot Password
            </Link>
          </div>

          <Button type="submit"> Login </Button>
        </form>
      </Form>
    </section>
  );
};

export default Main;
