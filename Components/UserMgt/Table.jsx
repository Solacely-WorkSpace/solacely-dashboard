"use client";
import { useState } from "react";
import Search from "./Search";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { RiEdit2Fill } from "react-icons/ri";
import Image from "next/image";
import passport from "@/public/images/passport.svg";
import turtle from "@/public/images/turtleneck.svg";
import greenhair from "@/public/images/greenhair.svg";
import blackwhite from "@/public/images/blackwhite.svg";
const TableLayout = () => {
  const [index, setIndex] = useState("1");

  const handleClick = (e) => {
    setIndex(e.target.id);
  };
  return (
    <section className=" mt-20">
      <Search
        button={" py-6 text-primary bg-purple-200 font-semibold"}
        style={
          " flex items-center text-slate-300 border border-slate-300 py-2 px-4 w-full md:max-w-[15%] rounded-md"
        }
        container={" flex gap-2 justify-end items-center px-4 md:px-8 mb-8"}
        word="Search User"
      />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox className=" border border-primary" />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Post</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox className=" border border-primary" />
              </TableCell>
              <TableCell className=" flex gap-2 items-center">
                <Image src={passport} alt="passpor" />
                amanda janie
              </TableCell>
              <TableCell>janie</TableCell>
              <TableCell>amandajane@gmail</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>
                <Button
                  onClick={handleClick}
                  id="1"
                  className={`border border-primary bg-white text-primary hover:text-white transition duration-300 cursor-pointer ${
                    index === "1" ? " bg-primary text-white" : ""
                  }`}
                >
                  {" "}
                  <RiEdit2Fill /> Edit{" "}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox className=" border border-primary" />
              </TableCell>
              <TableCell className=" flex gap-2 items-center">
                <Image src={greenhair} alt="thumbnail" />
                amanda janie
              </TableCell>
              <TableCell>janie</TableCell>
              <TableCell>amandajane@gmail</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>
                <Button
                  onClick={handleClick}
                  id="2"
                  className={`border border-primary bg-white text-primary hover:text-white transition duration-300 cursor-pointer ${
                    index === "2" ? " bg-primary text-white" : ""
                  }`}
                >
                  {" "}
                  <RiEdit2Fill /> Edit{" "}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox className=" border border-primary" />
              </TableCell>
              <TableCell className="flex gap-2 items-center">
                <Image src={blackwhite} alt="thumbnail" />
                amanda janie
              </TableCell>
              <TableCell>janie</TableCell>
              <TableCell>amandajane@gmail</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>
                <Button
                  onClick={handleClick}
                  id="3"
                  className={`border border-primary bg-white text-primary hover:text-white transition duration-300 cursor-pointer ${
                    index === "3" ? " bg-primary text-white" : ""
                  }`}
                >
                  {" "}
                  <RiEdit2Fill /> Edit{" "}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox className=" border border-primary" />
              </TableCell>
              <TableCell className=" flex gap-2 items-center">
                <Image src={turtle} alt="thumbnail" />
                amanda janie
              </TableCell>
              <TableCell>janie</TableCell>
              <TableCell>amandajane@gmail</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>employee</TableCell>
              <TableCell>
                <Button
                  onClick={handleClick}
                  id="4"
                  className={`border border-primary bg-white text-primary hover:text-white transition duration-300 cursor-pointer ${
                    index === "4" ? " bg-primary text-white" : ""
                  }`}
                >
                  {" "}
                  <RiEdit2Fill /> Edit{" "}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default TableLayout;
