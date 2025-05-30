"use client";
import { useForm } from "react-hook-form";
import SideImage from "../SignUp/SideImage";
import logo from "@/public/icons/logo.svg";
import { Form, FormControl, FormField, FormItem } from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import Image from "next/image";
import { OtpSchema } from "../../schemas/otp-schema";
import { cn } from "../../lib/cn";

const Otp = () => {
  const form = useForm({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: 0,
    },
  });

  const OtpVerification = (data:any) => {
    console.log(data);
  };
  return (
    <section className=" w-full flex">
      <SideImage />
      <div className=" w-full ">
        <div className=" flex gap-2 justify-end p-4 mb-10">
          <Image src={logo} alt="logo" />
          <p className=" font-rob font-bold text-2xl text-purple-900">
            {" "}
            Solacely{" "}
          </p>
        </div>
        <div className=" w-full mx-auto mt-20">
          <div className=" flex flex-col gap-8 items-center justify-center mb-10">
            <h1 className=" text-4xl font-bold font-rob">
              {" "}
              Security Verification{" "}
            </h1>
            <p className=" text-xs text-neutral-500 font-rob text-center">
              {" "}
              To secure your account, please complete the following verification{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center w-full">
            <p className=" text-xs font-normal">
              {" "}
              Enter 6 digit code received by ....
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(OtpVerification)}>
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputOTP {...field} maxLength={4}>
                          <InputOTPGroup>
                            <InputOTPSlot
                              index={0}
                              className=" px-8 py-10  rounded-md border-neutral-300"
                            >
                              {" "}
                            </InputOTPSlot>
                            <InputOTPSlot
                              index={1}
                              className=" px-8 py-10  rounded-md border-neutral-300"
                            >
                              {" "}
                            </InputOTPSlot>
                            <InputOTPSlot
                              index={2}
                              className=" px-8 py-10 rounded-md border-neutral-300"
                            >
                              {" "}
                            </InputOTPSlot>
                            <InputOTPSlot
                              index={3}
                              className=" px-8 py-10  rounded-md border-neutral-300"
                            >
                              {" "}
                            </InputOTPSlot>
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className=" flex justify-between items-center py-8">
                  <Button
                    type="button"
                    className={cn(
                      " bg-white border border-neutral-200 rounded-md font-medium text-neutral-800 p-6 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-200"
                    )}
                  >
                    {" "}
                    Resend Otp
                  </Button>
                  <Button
                    type="submit"
                    className={cn("rounded-md font-medium p-6")}
                  >
                    {" "}
                    Continue{" "}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
