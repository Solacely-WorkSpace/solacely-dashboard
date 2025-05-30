import Search from "../UserMgt/Search";
import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { TbArrowsUpDown } from "react-icons/tb";
import Image from "next/image";
import { Button } from "../ui/button";
import { agencyInfo } from "../../Constant";

const CustomerPage = () => {
  return (
    <div>
      <Search
        button={"hidden"}
        container=" mb-10"
        style={" flex gap-2 items-center text-slate-300"}
      />

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className=" flex items-center gap-2">
                  <Checkbox className={cn(" border border-primary")} />

                  <p> Full Name </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex items-center gap-2">
                  <p> Email </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex items-center gap-2">
                  <p> Phone Number </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex items-center gap-2">
                  <p> Location </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex items-center gap-2">
                  <p> Action </p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agencyInfo.map((info, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className=" flex gap-2 items-center">
                      <Checkbox className={cn(" border border-primary")} />
                      <Image src={info.avatar} alt="thumbnail" />
                      <p>{info.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p>{info.email}</p>
                  </TableCell>
                  <TableCell>
                    <p>{info.phoneNumber}</p>
                  </TableCell>
                  <TableCell>
                    <p>{info.location}</p>
                  </TableCell>
                  <TableCell>
                    <Button
                      className={cn(
                        " bg-white text-primary font-medium border border-primary rounded-md px-8 py-6"
                      )}
                    >
                      View
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

export default CustomerPage;
