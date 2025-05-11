"use client";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input, Textarea } from "../ui/input";
import { useForm } from "react-hook-form";
import { CiSquareInfo } from "react-icons/ci";
import { Checkbox } from "../ui/checkbox";

const Rto = () => {
  const form = useForm();
  return (
    <section>
      <Form {...form}>
        <form>
          <div className=" grid grid-cols-2 gap-x-4 gap-y-8 mb-6">
            <FormField
              name=" rentalperiod"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      " flex items-center uppercase text-xs font-medium"
                    )}
                  >
                    {" "}
                    Rental Period (Months){" "}
                    <CiSquareInfo className=" text-neutral-500 " size={15} />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" E.g 36"
                      {...field}
                      className={cn(
                        " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name=" optionbuy"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      " flex items-center font-medium text-xs uppercase"
                    )}
                  >
                    {" "}
                    Option To Buy Peiod (monthly){" "}
                    <CiSquareInfo size={15} className=" text-neutral-400" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" E.g 36"
                      {...field}
                      className={cn(
                        " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name=" buyoption"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      " uppercase flex items-center font-medium text-xs"
                    )}
                  >
                    {" "}
                    Buy Option Expiry Date{" "}
                    <CiSquareInfo size={15} className=" text-neutral-400" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" Enter Date"
                      {...field}
                      className={cn(
                        " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name=" monthly rent"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      " uppercase not-only-of-type:flex items-center font-medium text-xs"
                    )}
                  >
                    {" "}
                    Monthly Rent{" "}
                    <CiSquareInfo size={15} className=" text-neutral-400" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" Enter Price"
                      {...field}
                      className={cn(
                        " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name=" credit"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      " uppercase flex items-center font-medium text-xs"
                    )}
                  >
                    {" "}
                    Rent Credit (%){" "}
                    <CiSquareInfo size={15} className=" text-neutral-400" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" Enter Valuw"
                      {...field}
                      className={cn(
                        " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name=" buypice"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      " uppercase flex items-center font-medium text-xs"
                    )}
                  >
                    {" "}
                    Buy Price{" "}
                    <CiSquareInfo size={15} className="text-neutral-400" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" Enter Price"
                      {...field}
                      className={cn(
                        " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            name=" optionfee"
            control={form.control}
            render={({ field }) => (
              <FormItem className={cn(" mb-6")}>
                <FormLabel
                  className={cn(
                    " uppercase flex items-center font-medium text-xs"
                  )}
                >
                  {" "}
                  Option Fee{" "}
                  <CiSquareInfo size={15} className=" text-neutral-400" />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=" Enter Price"
                    {...field}
                    className={cn(
                      " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name=" condition"
            control={form.control}
            render={({ field }) => (
              <FormItem className={cn(" mb-6")}>
                <FormLabel
                  className={cn(
                    " uppercase flex items-center font-medium text-xs"
                  )}
                >
                  {" "}
                  Default & Termination Conditions{" "}
                  <CiSquareInfo size={15} className=" text-neutral-400" />
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=" Enter Conditions"
                    {...field}
                    className={cn(
                      " placeholder:text-neutral-400 py-6 px-2 border-2 border-slate-200"
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className=" grid grid-cols-2 gap-x-4 gap-y-8 mb-6">
            <div>
              <FormField
                name="repairs"
                control={form.control}
                render={({ field }) => (
                  <FormItem className={cn(" mb-6")}>
                    <FormLabel
                      className={cn(
                        " uppercase flex items-center font-medium text-xs"
                      )}
                    >
                      {" "}
                      Repairs & Maintenance{" "}
                      <CiSquareInfo size={15} className=" text-neutral-400" />
                    </FormLabel>
                    <FormControl className={cn(" flex items-center gap-x-8")}>
                      <div>
                        <div className=" flex items-center gap-x-2">
                          <Checkbox
                            id="repairs"
                            onCheckedChange={(value) => {
                              field.onChange(value);
                            }}
                          />
                          <p className=" text-xs font-semibold">Landlord</p>
                        </div>
                        <div className=" flex items-center gap-x-2">
                          <Checkbox
                            id="repairs"
                            onCheckedChange={(value) => {
                              field.onChange(value);
                            }}
                          />
                          <p className=" text-xs font-semibold ">Tenant</p>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                name="insurance"
                control={form.control}
                render={({ field }) => (
                  <FormItem className={cn(" mb-6")}>
                    <FormLabel
                      className={cn(
                        " uppercase flex items-center font-medium text-xs"
                      )}
                    >
                      {" "}
                      Property Insurance{" "}
                      <CiSquareInfo size={15} className=" text-neutral-400" />
                    </FormLabel>
                    <FormControl className={cn(" flex items-center gap-x-8")}>
                      <div>
                        <div className=" flex items-center gap-x-2">
                          <Checkbox
                            id="insurance"
                            onCheckedChange={(value) => {
                              field.onChange(value);
                            }}
                          />
                          <p className=" text-xs font-semibold">Landlord</p>
                        </div>
                        <div className=" flex items-center gap-x-2">
                          <Checkbox
                            id="insurance"
                            onCheckedChange={(value) => {
                              field.onChange(value);
                            }}
                          />
                          <p className=" text-xs font-semibold ">Tenant</p>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Rto;
