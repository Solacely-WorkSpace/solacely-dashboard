import React from "react";
import { Button } from "../ui/button";
import { MdPersonAddAlt1 } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const UserEdits = () => {
  return (
    <section className=" container flex flex-col gap-10 mt-28">
      <div className=" flex justify-between items-center px-4">
        <h1 className=" text-2xl font-medium">Users</h1>
        <Button>
          <MdPersonAddAlt1 />
          Add Users
        </Button>
      </div>

      <div className=" flex gap-16 px-4 items-center">
        <div className=" flex-1 flex gap-8">
          <div className=" flex items-center gap-2">
            <Select className=" px-8 py-4">
              <SelectTrigger className=" w-[250px] py-6">
                <SelectValue placeholder="Bulk Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Text Here"> Text Here </SelectItem>
                <SelectItem value="Text Here"> Text Here </SelectItem>
                <SelectItem value="Text Here"> Text Here </SelectItem>
                <SelectItem value="Text Here"> Text Here </SelectItem>
              </SelectContent>
            </Select>
            <Button className=" bg-purple-200 text-primary px-10 py-6 hover:text-white hover:cursor-pointer transition-colors duration-300">
              {" "}
              Apply{" "}
            </Button>
          </div>
          <div className=" flex gap-2 items-center">
            <Select>
              <SelectTrigger className=" w-[250px] py-6">
                <SelectValue placeholder="Change Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Text Here"> Text Here </SelectItem>
                <SelectItem value="Text Here"> Text Here </SelectItem>
                <SelectItem value="Text Here"> Text Here </SelectItem>
                <SelectItem value="Text Here"> Text Here </SelectItem>
              </SelectContent>
            </Select>
            <Button className=" bg-purple-200 text-primary px-10 py-6 hover:text-white hover:cursor-pointer transition-colors duration-300">
              {" "}
              Apply{" "}
            </Button>
          </div>
        </div>

        <div className=" flex gap-1">
          <p> All </p>
          <p className=" font-medium text-tertially"> Administrator</p>
        </div>
      </div>
    </section>
  );
};

export default UserEdits;
