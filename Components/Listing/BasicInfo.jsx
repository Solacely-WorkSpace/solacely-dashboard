"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input, Textarea } from "../ui/input";
import { BsImageFill } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import Addnew from "./Addnew";

const BasicInfo = ({ form }) => {
  const inputs = [
    "vr",
    "video",
    "bathroom",
    "bedroom",
    "livingroom",
    "kitchen",
  ];

  const [activeInput, setActiveInput] = useState("livingroom");

  const [previews, setPreviews] = useState(
    inputs.reduce((acc, cur) => {
      acc[cur] = [];
      return acc;
    }, {})
  );

  useEffect(() => {
    previews[activeInput]?.forEach((url) => URL.revokeObjectURL(url));

    const files = form.getValues(activeInput) || [];

    const newPreviews = files
      .filter((file) => file instanceof File)
      .map((file) => URL.createObjectURL(file));

    setPreviews((prev) => ({
      ...prev,
      [activeInput]: newPreviews,
    }));

    return newPreviews.forEach((url) => URL.revokeObjectURL(url));
  }, [form.watch(activeInput), activeInput]);

  const filteredInputs = inputs.filter(
    (input) => input !== "video" && input !== "vr"
  );

  const removeImage = (fieldName, index) => {
    const files = form.getValues(fieldName) || [];
    const newFiles = [...files];
    newFiles.splice(index, 1);
    form.setValue(fieldName, newFiles, { shouldValidate: true });

    setPreviews((prev) => {
      const updatedPreviews = [...(prev[fieldName] || [])];
      if (updatedPreviews[index]) {
        URL.revokeObjectURL(updatedPreviews[index]);
      }

      updatedPreviews.splice(index, 1);

      return {
        ...prev,
        [fieldName]: updatedPreviews,
      };
    });
  };

  const fileInputRefs = useRef({});

  useEffect(() => {
    inputs.forEach((input) => {
      if (!fileInputRefs.current[input]) {
        fileInputRefs.current[input] = React.createRef();
      }
    });
  }, []);

  const preview = useMemo(() => {
    const files = form.getValues(activeInput);
    if (!files || files.length === 0) return [];

    return files
      .filter((file) => file instanceof File)
      .map((file) => URL.createObjectURL(file));
  }, [form, activeInput, form.watch(activeInput)]);

  useEffect(() => {
    return () => {
      preview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [preview]);

  const handleChange = (e, fieldName) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    const existingFiles = form.getValues(fieldName) || [];

    form.setValue(fieldName, [...existingFiles, ...newFiles], {
      shouldValidate: true,
    });
  };

  return (
    <div className=" flex flex-col gap-4">
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
              <FormMessage />
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
                  type={"number"}
                  placeholder="Enter Price"
                  {...field}
                  className={cn(
                    " w-full py-6 px-2 border-2 border-slate-200 placeholder:text-slate-300"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className=" flex gap-4 items-start">
        <FormField
          control={form.control}
          name="buildingType"
          render={({ field }) => (
            <FormItem className={cn(" w-full ")}>
              <FormLabel
                className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
              >
                Building Type{" "}
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={cn(
                      " py-6 px-2 w-full border-2 border-slate-200"
                    )}
                  >
                    <SelectValue placeholder="Select Building Type" />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="period"
          render={({ field }) => (
            <FormItem className={cn(" w-full")}>
              <FormLabel
                className={cn(" mb-1 font-medium text-[0.8rem] uppercase")}
              >
                {" "}
                Period{" "}
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={cn(
                      " w-full py-6 px-2 border-2 border-slate-200"
                    )}
                  >
                    <SelectValue placeholder="Monthly" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shortlet"> Short Let </SelectItem>
                    <SelectItem value="annually"> Anually </SelectItem>
                    <SelectItem value="flexible"> Flexible Term </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
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
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={cn(
                      " w-full border-2 border-slate-200 py-6 px-2"
                    )}
                  >
                    <SelectValue placeholder="Available" />
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
              <FormMessage />
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
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={cn(
                      " w-full border-2 border-slate-200 py-6 px-2"
                    )}
                  >
                    <SelectValue placeholder="Agent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sec"> Seun Estate Co. </SelectItem>
                    <SelectItem value="seun-housing">
                      {" "}
                      Seun Housings{" "}
                    </SelectItem>
                    <SelectItem value="Tclp">Tc Landing Properties</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="location"
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
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="description"
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
              <Textarea
                {...field}
                className=" h-40 w-full border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                placeholder="Enter property details"
              />
            </FormControl>
            <FormMessage />
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
          render={() => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  ref={fileInputRefs.current["vr"]}
                  accept=".vr"
                  className="hidden"
                  onChange={(e) => {
                    form.setValue("vr", e.target.files);
                  }}
                />
              </FormControl>
              <FormMessage />
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
          render={() => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  ref={fileInputRefs.current["video"]}
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => {
                    form.setValue("video", e.target.files);
                  }}
                />
              </FormControl>
              <FormMessage />
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
          onClick={() => fileInputRefs.current[activeInput]?.current?.click()}
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
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      handleChange(e, activeInput);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {preview.length > 0 && (
            <div className=" flex gap-1">
              {preview.map((src, ind) => (
                <Image
                  key={ind}
                  src={src}
                  alt="Preview"
                  width={50}
                  height={50}
                  className=" w-auto h-auto"
                />
              ))}
            </div>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="bed"
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="bath"
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
              <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Addnew
        form={form}
        label={" Maintainance & Repairs"}
        placeholder={" Repairs "}
        name={"repairs"}
      />

      <Addnew
        form={form}
        label={" Defects "}
        placeholder={" Defects "}
        name={"defects"}
      />
    </div>
  );
};

export default BasicInfo;
