"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "../ui/select";
import { MoreHorizontalIcon } from "lucide-react";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "../ui/table";
import { TbArrowsUpDown } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { RiAddBoxFill } from "react-icons/ri";
import island from "@/public/images/island.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Apartment = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className=" flex justify-between items-center px-4 mb-10">
        <div className=" flex gap-2 items-center px-2 py-2 border border-slate-200 rounded w-full md:max-w-md">
          <CiSearch size={25} />

          <Input
            type="text"
            placeholder="Search for Apartment"
            value={search}
            onChange={handleChange}
            className="border-none w-full placeholder:text-slate-300"
          />
        </div>
        <Link
          href="spaces/apartment"
          className=" flex items-center gap-2 bg-primary text-white px-4 py-2 rounded"
        >
          <RiAddBoxFill /> Add New{" "}
        </Link>
      </div>
      <div className=" mb-10">
        <div className=" flex gap-10 items-start ">
          <div className=" flex flex-col gap-2">
            {" "}
            <p className=" text-slate-600 font-bold">Type</p>
            <Select>
              <SelectTrigger className="py-5 flex gap-10 outline-none">
                <SelectValue placeholder="Apartment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="building">Building</SelectItem>
                <SelectItem value="building">Building</SelectItem>
                <SelectItem value="building">Building</SelectItem>
                <SelectItem value="building">Building</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className=" flex flex-col gap-2">
            {" "}
            <Select>
              <p className=" text-slate-600 font-bold">Staus</p>
              <SelectTrigger className={cn(" gap-10 py-5")}>
                <SelectValue placeholder="For Rent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="for rent">For Rent</SelectItem>
                <SelectItem value="for sale">For Sale</SelectItem>
                <SelectItem value="for lease">For Lease</SelectItem>
                <SelectItem value="for lease">For Lease</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className=" flex flex-col gap-2">
            <Select>
              <p className=" text-slate-600 font-bold">Location</p>
              <SelectTrigger className={cn("py-5 gap-10")}>
                <SelectValue placeholder="Lagos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="badagry">Badagry</SelectItem>
                <SelectItem value="abuja">Abuja</SelectItem>
                <SelectItem value="portharcout">Port-Harcourt</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className=" flex flex-col gap-2">
            <Select>
              <p className=" text-slate-600 font-bold">Date</p>
              <SelectTrigger className={cn("py-5 gap-10")}>
                <SelectValue placeholder="Past 30 Days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last month">Last Month</SelectItem>
                <SelectItem value="2 month">2 Months</SelectItem>
                <SelectItem value="3 month">3 Months</SelectItem>
                <SelectItem value="4 month">4 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow className={cn(" font-bold text-[16px] ")}>
              <TableHead>
                <div className=" flex gap-2 items-center text-slate-600">
                  <p>Title/Property ID</p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center text-slate-600">
                  <p>Date</p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center text-slate-600">
                  <p>Location</p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center text-slate-600">
                  <p>Amount</p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div>
                  <p className=" text-slate-600">Status</p>
                </div>
              </TableHead>
              <TableHead>
                <div>
                  <p className=" text-slate-600">Type</p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className=" flex gap-4 items-center">
                  <Image
                    src={island}
                    alt="island"
                    className=" w-[50px] h-[50px] rounded"
                  />
                  <div className=" flex flex-col gap-2">
                    <h3 className=" font-bold text-[16px]">
                      {" "}
                      Home In Coral Gables
                    </h3>
                    <p className=" text-slate-300 font-medium text-[14px]">
                      {" "}
                      RH-2017-04{" "}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className=" flex flex-col gap-2 items-start">
                  <h3 className=" font-medium text-[16px]"> Jan 24,-2019 </h3>
                  <p className=" text-slate-300"> at 08:00 PM </p>
                </div>
              </TableCell>
              <TableCell>
                <p className=" font-medium text-[16px]"> Lagos </p>
              </TableCell>
              <TableCell>
                <div className=" flex flex-col gap-2">
                  <h3 className=" text-[16px] font-medium"> 300,000</h3>
                  <p className="text-slate-300"> Monthly </p>
                </div>
              </TableCell>
              <TableCell>
                <p className=" text-orange-400 bg-orange-100 px-4 py-2 rounded w-fit">
                  {" "}
                  Closed{" "}
                </p>
              </TableCell>
              <TableCell>
                <div className=" flex flex-col">
                  <h3 className=" text-[16px] font-medium"> Apartment</h3>
                  <p className=" text-gray-400 text-[15px]"> Building </p>
                </div>
              </TableCell>
              <TableCell>
                <MoreHorizontalIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Apartment;
