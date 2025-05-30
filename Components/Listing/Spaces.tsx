"use client";

import React, { useRef, useState, useEffect, RefObject } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { BsImageFill } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "../../lib/cn";
type InputKey = "vr" | "video" | "image";
const Spaces = ({ form }) => {
  const [show, setShow] = useState(1);

const fileInputRefs = useRef<Partial<Record<InputKey, RefObject<HTMLInputElement | null>>>>({});

const inputs: InputKey[] = ["vr", "video", "image"];
 useEffect(() => {
    inputs.forEach((input) => {
      fileInputRefs.current[input] ??= React.createRef<HTMLInputElement>();
    });
  }, []);

  return (
    <section>
      <div className=" flex-col gap-8 px-4 mb-10">
        <div className=" flex justify-between items-center">
          <h3 className=" text-xs font-bold"> Space 1 </h3>
          <FaChevronRight
            size={10}
            className={` text-neutral-400 cursor-pointer ${
              show ? " rotate-90 transition duration-300 ease-in-out" : ""
            }`}
            onClick={() => {
              setShow(1);
            }}
          />
        </div>

        {show === 1 && (
          <div className="mt-6 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 mb-6">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
                      {" "}
                      Property Title{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter Property Title"
                        type={"text"}
                        {...field}
                        className={cn(
                          " border-2 border-slate-200 py-6 px-2 placeholder:text-slate-300"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
                      {" "}
                      Rent Price (Only Digits){" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter Price"
                        type={"number"}
                        {...field}
                        className={cn(
                          " border-2 border-slate-200 py-6 px-2 placeholder:text-slate-300"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="period"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
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
                          <SelectValue
                            placeholder=" Select Period"
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly"> Monthly </SelectItem>
                          <SelectItem value="annually"> Anually </SelectItem>
                          <SelectItem value="shortlet"> Short-Let </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

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
                Supports Mp4, Mkv, Avi Formats
              </p>
              <FormField
                name="vr"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="file"
                        ref={fileInputRefs.current["video"]}
                        accept=" .mp4, .mkv, .avi"
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
          </div>
        )}
      </div>
      <div className=" flex-col gap-8 px-4 mb-10">
        <div className=" flex justify-between items-center">
          <h3 className=" text-xs font-bold"> Space 2 </h3>
          <FaChevronRight
            size={10}
            className={` text-neutral-400 cursor-pointer ${
              show ? " rotate-90 transition duration-300 ease-in-out" : ""
            }`}
            onClick={() => {
              setShow(2);
            }}
          />
        </div>

        {show === 2 && (
          <div className="mt-6 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 mb-6">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
                      {" "}
                      Property Title{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter Property Title"
                        type={"text"}
                        {...field}
                        className={cn(
                          " border-2 border-slate-200 py-6 px-2 placeholder:text-slate-300"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
                      {" "}
                      Rent Price (Only Digits){" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter Price"
                        type={"number"}
                        {...field}
                        className={cn(
                          " border-2 border-slate-200 py-6 px-2 placeholder:text-slate-300"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="period"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
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
                          <SelectValue
                            placeholder=" Select Period"
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly"> Monthly </SelectItem>
                          <SelectItem value="annually"> Anually </SelectItem>
                          <SelectItem value="shortlet"> Short-Let </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

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
                Supports Mp4, Mkv, Avi Formats
              </p>
              <FormField
                name="vr"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="file"
                        ref={fileInputRefs.current["video"]}
                        accept=" .mp4, .mkv, .avi"
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
          </div>
        )}
      </div>
      <div className=" flex-col gap-8 px-4 mb-10">
        <div className=" flex justify-between items-center">
          <h3 className=" text-xs font-bold"> Space 3 </h3>
          <FaChevronRight
            size={10}
            className={` text-neutral-400 cursor-pointer ${
              show ? " rotate-90 transition duration-300 ease-in-out" : ""
            }`}
            onClick={() => {
              setShow(3);
            }}
          />
        </div>

        {show === 3 && (
          <div className="mt-6 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 mb-6">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
                      {" "}
                      Property Title{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter Property Title"
                        type={"text"}
                        {...field}
                        className={cn(
                          " border-2 border-slate-200 py-6 px-2 placeholder:text-slate-300"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
                      {" "}
                      Rent Price (Only Digits){" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter Price"
                        type={"number"}
                        {...field}
                        className={cn(
                          " border-2 border-slate-200 py-6 px-2 placeholder:text-slate-300"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="period"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(" text-[0.8rem] font-semibold")}>
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
                          <SelectValue
                            placeholder=" Select Period"
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly"> Monthly </SelectItem>
                          <SelectItem value="annually"> Anually </SelectItem>
                          <SelectItem value="shortlet"> Short-Let </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

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
                Supports Mp4, Mkv, Avi Formats
              </p>
              <FormField
                name="vr"
                control={form.control}
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="file"
                        ref={fileInputRefs.current["video"]}
                        accept=" .mp4, .mkv, .avi"
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Spaces;
