"use client";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { BsImageFill } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn, ListingSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const BasicInfo = () => {
  const inputs = [
    "vr",
    "video",
    " bathroom",
    "bedroom",
    "livingroom",
    "kitchen",
  ];

  const [activeInput, setActiveInput] = useState("livingroom");

  const [preview, setPreview] = useState({});

  const filteredInputs = inputs.filter(
    (input) => input !== "video" && input !== "vr"
  );

  const fileInputRefs = useRef({});

  useEffect(() => {
    inputs.forEach((input) => {
      if (!fileInputRefs.current[input]) {
        fileInputRefs.current[input] = React.createRef();
      }
    });
  }, []);

  const form = useForm({
    resolver: zodResolver(ListingSchema),
  });
  const UploadApartment = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(UploadApartment)}
          className=" flex flex-col gap-4"
        >
          <div className=" flex gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className={cn("w-full")}>
                  <FormLabel
                    className={cn(" uppercase mb-1 font-medium text-[0.8rem]")}
                  >
                    {" "}
                    Property Title{" "}
                  </FormLabel>
                  <FormControl className="w-full">
                    <Input
                      type="text"
                      placeholder="Enter property title"
                      {...field}
                      className=" w-full py-6 px-2 border-2 border-slate-200 placeholder:text-slate-300"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className={cn(" w-full")}>
                  <FormLabel
                    className={cn(" uppercase mb-1 font-medium text-[0.8rem]")}
                  >
                    {" "}
                    Rent Price (Only Digits){" "}
                  </FormLabel>
                  <FormControl className="w-full">
                    <Input
                      type="number"
                      placeholder="Enter Price"
                      minLength={4000}
                      maxLength={40000000}
                      {...field}
                      className={cn(
                        " w-full py-6 px-2 border-2 border-slate-200 placeholder:text-slate-300"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className=" flex gap-4 items-start">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className={cn(" w-full ")}>
                  <FormLabel
                    className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
                  >
                    Building Type{" "}
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className={cn(
                          " py-6 px-2 w-full border-2 border-slate-200"
                        )}
                      >
                        <SelectValue
                          placeholder="Select Building Type"
                          {...field}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apartment"> Apartment </SelectItem>
                        <SelectItem value="detached-house">
                          {" "}
                          Detached House{" "}
                        </SelectItem>
                        <SelectItem value="semi-detached">
                          {" "}
                          Semi-Detached House{" "}
                        </SelectItem>
                        <SelectItem value="terrace/townhouse">
                          {" "}
                          Terrace / Townhouse
                        </SelectItem>
                        <SelectItem value="bungalow"> Bungalow </SelectItem>
                        <SelectItem value="studio-apartment">
                          {" "}
                          Studio Apartment (Self-Contain){" "}
                        </SelectItem>
                        <SelectItem value="shared-apartment">
                          {" "}
                          Shared Apartment{" "}
                        </SelectItem>
                        <SelectItem value="duplex"> Duplex </SelectItem>
                        <SelectItem value="coliving-space">
                          {" "}
                          Co-living Space{" "}
                        </SelectItem>
                        <SelectItem value="mini-flat">
                          {" "}
                          Mini Flat (1 Bedroom + 1 Living Room){" "}
                        </SelectItem>
                        <SelectItem value="serviced-apartment">
                          {" "}
                          Serviced Apartment{" "}
                        </SelectItem>
                        <SelectItem value="commercial">
                          {" "}
                          Commercial Property (Office / Retail){" "}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className={cn(" w-full")}>
                  <FormLabel
                    className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
                  >
                    {" "}
                    Period{" "}
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className={cn(
                          " w-full py-6 px-2 border-2 border-slate-200"
                        )}
                      >
                        <SelectValue placeholder="Monthly" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shortlet"> Short Let </SelectItem>
                        <SelectItem value="annually"> Anually </SelectItem>
                        <SelectItem value="flexible">
                          {" "}
                          Flexible Term{" "}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className=" flex gap-4 items-start">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className={cn(" w-full")}>
                  <FormLabel
                    className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
                  >
                    {" "}
                    Property Availability{" "}
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className={cn(
                          " w-full border-2 border-slate-200 py-6 px-2"
                        )}
                      >
                        <SelectValue placeholder="Available" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available"> Available </SelectItem>
                        <SelectItem value="available-from">
                          {" "}
                          Available From [Date]{" "}
                        </SelectItem>
                        <SelectItem value="not-available">
                          {" "}
                          Not Available / Off Market{" "}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agent"
              render={({ field }) => (
                <FormItem className={cn(" w-full")}>
                  <FormLabel
                    className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
                  >
                    {" "}
                    Agent{" "}
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className={cn(
                          " w-full border-2 border-slate-200 py-6 px-2"
                        )}
                      >
                        <SelectValue placeholder="Agent" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sec"> Seun Estate Co. </SelectItem>
                        <SelectItem value="seun-housing">
                          {" "}
                          Seun Housings{" "}
                        </SelectItem>
                        <SelectItem value="Tclp">
                          Tc Landing Properties
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
                >
                  {" "}
                  Property Address{" "}
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter property address"
                    {...field}
                    className={cn(" py-6 px-2 border-2 border-slate-200")}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="details"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
                >
                  {" "}
                  Details{" "}
                </FormLabel>
                <FormControl>
                  <textarea
                    className=" h-40 w-full border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter property details"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div
            onClick={() => fileInputRefs.current["vr"]?.current?.click()}
            className="cursor-pointer flex flex-col gap-1 items-center justify-center border-dashed border-2 border-slate-200 rounded-md py-8 bg-white mb-6"
          >
            <BsImageFill size={28} className=" text-neutral-400" />
            <p className=" text-[0.7rem] font-semibold">Upload VR Video</p>
            <p className=" text-xs text-neutral-400 font-rob ">
              Supports VR Formats
            </p>
            <FormField
              name="vr"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      ref={fileInputRefs.current["vr"]}
                      accept=" .vr"
                      className="hidden"
                      onChange={(e) => {
                        form.setValue("vr", e.target.files);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div
            onClick={() => fileInputRefs.current["video"]?.current?.click()}
            className="cursor-pointer flex flex-col gap-1 items-center justify-center border-dashed border-2 border-slate-200 rounded-md py-8 bg-white mb-6"
          >
            <BsImageFill size={28} className=" text-neutral-400" />
            <p className=" text-[0.7rem] font-semibold">Upload Video</p>
            <p className=" text-xs text-neutral-400 font-rob ">
              Supports Mp4 Formats
            </p>
            <FormField
              name="video"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      ref={fileInputRefs.current["video"]}
                      accept=" video/*"
                      className="hidden"
                      onChange={(e) => {
                        form.setValue("video", e.target.files);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div>
            <div className=" flex gap-4 items-center mb-6">
              {filteredInputs.map((input, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    setActiveInput(input);
                  }}
                  type="button"
                  className={cn(
                    " bg-neutral-100 text-black font-medium shadow-sm text-[0.8rem] hover:bg-neutral-200 cursor-pointer transition-colors duration-300 ease-in-out",
                    {
                      " border  border-emerald-600 bg-emerald-100 text-emerald-800":
                        activeInput === input,
                    }
                  )}
                >
                  {" "}
                  {input.charAt(0).toUpperCase() + input.slice(1)}{" "}
                </Button>
              ))}
            </div>
            <div
              className=" flex flex-col items-center justify-center gap-1 border-2 border-dashed p-8 border-slate-200 rounded-md mb-6 cursor-pointer"
              onClick={() =>
                fileInputRefs.current[activeInput]?.current?.click()
              }
            >
              <BsImageFill size={28} className=" text-neutral-400" />
              <p className=" text-[0.7rem] font-semibold ">
                {" "}
                Upload Images of the {activeInput}{" "}
              </p>
              <p className=" text-neutral-400 text-xs">
                {" "}
                Supports Jpg, Jpeg, and Png
              </p>

              <FormField
                name={activeInput}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="file"
                        ref={fileInputRefs.current[activeInput]}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const files = e.target.files?.[0];

                          form.setValue(activeInput, files);

                          if (files) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setPreview((prev) => ({
                                ...prev,
                                [activeInput]: reader.result,
                              }));
                            };
                            reader.readAsDataURL(files);
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {preview[activeInput] && (
                <Image
                  src={preview[activeInput]}
                  alt="Preview"
                  width={100}
                  height={100}
                />
              )}
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-x-4 gap-y-8 mb-6">
            <FormField
              name="size"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(" uppercase text-xs font-medium")}>
                    {" "}
                    Area Size (In Sq Ft)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder=" Enter Size"
                      {...field}
                      className={cn(
                        " px-2 py-6 placeholder:text-neutral-400 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="bedroom"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(" uppercase text-xs font-medium")}>
                    {" "}
                    Bedroom
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder=" Enter Number of Bedroom"
                      {...field}
                      className={cn(
                        " px-2 py-6 placeholder:text-neutral-400 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="bathroom"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(" uppercase text-xs font-medium")}>
                    {" "}
                    Bathroom
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder=" Enter Number of Bathroom"
                      {...field}
                      className={cn(
                        " px-2 py-6 placeholder:text-neutral-400 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="garage"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(" uppercase text-xs font-medium")}>
                    {" "}
                    Garage{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder=" Enter Number of Parking Space"
                      {...field}
                      className={cn(
                        " px-2 py-6 placeholder:text-neutral-400 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BasicInfo;
