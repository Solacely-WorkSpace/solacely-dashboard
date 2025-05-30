"use client";
import Search from "../UserMgt/Search";

import { TbArrowsUpDown } from "react-icons/tb";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "../ui/table";


import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/cn";
const Accounts = () => {
  return (
    <section className=" container mt-20">
      <Search
        button={"hidden"}
        container={" mb-5"}
        style={
          " flex items-center text-gray-300 border border-slate-300 w-full md:max-w-[15%] px-2 rounded-md"
        }
      />

      <div>
        <Table>
          <TableHeader className={cn(" bg-slate-100 text-[1rem]")}>
            <TableRow>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  Name/Email
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex gap-2 items-center">
                  Time
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex gap-2 items-center">
                  Location
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex gap-2 items-center">
                  Property
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex gap-2 items-center">
                  Amount
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  Status
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partnerInfo.map((info, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className=" flex gap-4 items-center">
                      <Image src={info.avatar} alt="thumbnail" />
                      <p className=" flex flex-col gap-2 font-medium text-sm ">
                        {info.bio.name}
                        <span className=" text-xs font-normal">
                          {info.bio.email}
                        </span>
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className=" flex flex-col gap-2">
                      <h4 className=" font-medium text-sm">
                        {" "}
                        {info.timeStamp.date}{" "}
                      </h4>
                      <p className=" text-gray-400">
                        {" "}
                        at {info.timeStamp.time}{" "}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className={cn(" font-medium")}>
                    {info.location}
                  </TableCell>
                  <TableCell>
                    <div className=" flex flex-col gap-2">
                      <h2 className=" font-medium"> {info.property.name}</h2>
                      <p className=" text-gray-400">{info.property.type} </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className=" flex flex-col gap-2">
                      <h2 className=" font-medium">{info.payment.amount}</h2>
                      <p className=" text-gray-400">{info.payment.seasonal}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`${
                        info.status === "Paid"
                          ? " bg-green-50 text-green-400 "
                          : info.status === "Failed"
                          ? " bg-red-50 text-red-500 "
                          : " bg-orange-50 text-orange-400"
                      } rounded-md w-fit px-8 py-2`}
                    >
                      {info.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link
                      href="/view"
                      className=" bg-white border border-primary px-8 py-3 rounded-md text-primary font-bold"
                    >
                      {" "}
                      {info.action}{" "}
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Accounts;
