"use client";
import { useState } from "react";
import Search from "../UserMgt/Search";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { TbArrowsUpDown } from "react-icons/tb";
import Image from "next/image";
import { agencyInfo } from "../../Constant";
import { cn } from "../../lib/cn";

const PartnerComponenent = () => {
  const [active, setActive] = useState<string>("agent");
  const [filter, setFilter] = useState<string>("agent");

  const filteredInfo = agencyInfo.filter((agency) => {
    if (filter === "verification") return agency.status === "unverified";
    return agency.role === filter;
  });

  const handleClick = (currentFilter:string) => {
    setFilter(currentFilter);
    setActive(currentFilter);
  };

  return (
    <div className=" flex flex-col gap-10">
      <div className=" flex justify-between items-center">
        <div className=" flex gap-4 transition-all duration-300">
          <Button
            onClick={() => {
              handleClick("agent");
            }}
            className={` bg-white font-semibold text-gray-300 border border-slate-200 px-12 py-6 ${
              active === "agent"
                ? "bg-primary border-none rounded-md text-white font-semibold"
                : ""
            } transition-color ease-linear duration-300 cursor-pointer`}
          >
            {" "}
            Agent{" "}
          </Button>
          <Button
            onClick={() => {
              handleClick("agency");
            }}
            className={` bg-white font-medium text-gray-300 border border-slate-200 px-12 py-6 ${
              active === "agency"
                ? "bg-primary border-none rounded-md text-white font-semibold"
                : ""
            } transition-colors ease-linear duration-300`}
          >
            {" "}
            Agency{" "}
          </Button>
          <Button
            onClick={() => {
              handleClick("landlord");
            }}
            className={` bg-white font-medium text-gray-300 border border-slate-200 px-12 py-6 ${
              active === "landlord"
                ? "bg-primary border-none rounded-md text-white font-semibold"
                : ""
            } transition-colors ease-linear duration-300`}
          >
            {" "}
            Landlords{" "}
          </Button>
          <Button
            onClick={() => {
              handleClick("verification");
            }}
            className={` bg-white font-semibold text-gray-300 border border-slate-200 px-12 py-6 ${
              active === "verification"
                ? "bg-primary border-none rounded-md text-white font-semibold"
                : ""
            } transition-colors ease-linear duration-300`}
          >
            {" "}
            Verification{" "}
          </Button>
        </div>
        <Search
          style={
            " flex text-slate-300 items-center border border-slate-300 px-2 py-2 rounded-md "
          }
          container={" flex items-center gap-4 px-4"}
          button={" px-8 py-6"}
          word="Add User"
        />
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex gap-2 items-center">
                  <p> Full Name </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  <p> Email </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  <p> Location </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  <p> Phone Number </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  <p> Properties </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInfo.map((info, index) => {
              return (
                <TableRow key={index} className=" font-medium">
                  <TableCell>
                    <div className=" flex gap-2 items-center">
                      <Image src={info.avatar} alt="thumbnail" />
                      <p>{info.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p> {info.email} </p>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <p> {info.location} </p>
                  </TableCell>
                  <TableCell>
                    <p> {info.phoneNumber} </p>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <p> {info.properties} </p>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      className={cn(
                        " px-8 py-6 bg-white border border-primary text-primary"
                      )}
                    >
                      {" "}
                      View{" "}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PartnerComponenent;
