"use client";
import SideImage from "../SignUp/SideImage";
import logo from "@/public/icons/logo.svg";
import Image from "next/image";
import { Form, FormControl, FormItem, FormField, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn, ResetPasswordSchema } from "@/lib/utils";
import { Button } from "../ui/button";

const ResetPassword = () => {
  const form = useForm({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleResetPassword = (data) => {
    console.log(data);
  };

  return (
    <section className=" w-full flex">
      <SideImage />
      <div className=" w-full">
        <div className=" flex gap-2 justify-end p-4 mb-10">
          <Image src={logo} alt="logo" />
          <p className=" font-rob font-bold text-2xl text-purple-900">
            {" "}
            Solacely{" "}
          </p>
        </div>
        <div className=" w-full mx-auto mt-20">
          <h1 className=" text-2xl font-bold font-rob text-center mb-10">
            New Password
          </h1>
          <div className=" w-full md:max-w-sm flex flex-col gap-4 justify-center mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleResetPassword)}
                className=" flex flex-col gap-4"
              >
                <FormLabel>Email</FormLabel>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Email"
                          type="email"
                          className={cn(
                            " p-6 border-neutral-200 border-2 placeholder:text-neutral-400"
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormLabel>Password</FormLabel>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Password"
                          type="password"
                          className={cn(
                            " p-6 border-neutral-200 border-2 placeholder:text-neutral-400"
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormLabel>Confirm Password</FormLabel>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Confirm Password"
                          type="password"
                          className={cn(
                            " p-6 border-neutral-200 border-2 placeholder:text-neutral-400"
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button className={cn(" p-6 mt-4")}> Continue </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
