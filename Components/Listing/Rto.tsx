"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { CiSquareInfo } from "react-icons/ci";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { cn } from "../../lib/cn";
import { Textarea } from "../ui/textarea";

const Rto = ({ form }) => {
  const Landlord = "landlord";
  const Tenant = "tenant";
  return (
    <section>
      <div className=" grid grid-cols-2 gap-x-4 gap-y-8 mb-6">
        <FormField
          name="rentalPeriod"
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="optionToBuy"
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="expiryDate"
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
          name="monthlyRent"
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
          name="rentCredit"
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
                  placeholder=" Enter Value"
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
          name="buyPrice"
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
        name="optionFee"
        control={form.control}
        render={({ field }) => (
          <FormItem className={cn(" mb-6")}>
            <FormLabel
              className={cn(" uppercase flex items-center font-medium text-xs")}
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
        name="terminationConditions"
        control={form.control}
        render={({ field }) => (
          <FormItem className={cn(" mb-6")}>
            <FormLabel
              className={cn(" uppercase flex items-center font-medium text-xs")}
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
            name="maintainace"
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
                        onCheckedChange={(Landlord) => {
                          field.onChange(Landlord);
                        }}
                      />
                      <p className=" text-xs font-semibold">Landlord</p>
                    </div>
                    <div className=" flex items-center gap-x-2">
                      <Checkbox
                        id="insurance"
                        onCheckedChange={(Tenant) => {
                          field.onChange(Tenant);
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
    </section>
  );
};

export default Rto;
