"use client";
import { useState } from "react";
import Search from "../UserMgt/Search";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "../ui/table";
import { TbArrowsUpDown } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { Comments } from "../../Constant";

const Commentts = () => {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState("All");

  const filteredReview = Comments.filter((comment) => {
    if (filter === "All") return true;
    return comment.status === filter;
  });

  const handleFilter = (currentFilter) => {
    setFilter(currentFilter);
    setActive(currentFilter);
  };

  return (
    <div>
      <div className=" flex justify-between items-center px-4 mb-4">
        <Search
          button={"hidden"}
          style={
            " flex items-center text-slate-300 px-2 py-1 rounded-md border border-slate-300"
          }
        />
        <div className=" flex gap-2 items-center font-medium text-gray-400">
          <p
            onClick={() => {
              handleFilter("All");
            }}
            className={`${
              active === "All" ? "text-primary" : ""
            } cursor-pointer`}
          >
            All {`(${Comments.length})`}
          </p>
          <p
            onClick={() => {
              handleFilter("pending");
            }}
            className={`${
              active === "pending" ? "text-primary" : ""
            } cursor-pointer`}
          >
            {" "}
            Pending{" "}
            {`(${
              Comments.filter((comment) => comment.status === "pending").length
            })`}
          </p>
          <p
            onClick={() => {
              handleFilter("approved");
            }}
            className={`${
              active === "approved" ? "text-primary" : ""
            } cursor-pointer`}
          >
            Approved{" "}
            {`(${
              Comments.filter((comment) => comment.status === "approved").length
            })`}
          </p>
          <p
            onClick={() => {
              handleFilter("trash");
            }}
            className={`${
              active === "trash" ? "text-primary" : ""
            } cursor-pointer`}
          >
            Trash{" "}
            {`(${
              Comments.filter((comment) => comment.status === "trash").length
            })`}
          </p>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  {" "}
                  <p>Author</p> <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  <p>Comment</p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  <p>Response to</p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className=" flex gap-2 items-center">
                  <p>Submitted on</p>
                  <TbArrowsUpDown />
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReview.map((review, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className=" flex gap-2 items-center">
                      <Image src={review.avatar} alt="thumbnail" />
                      <p className=" flex flex-col gap-2 items-center font-bold">
                        {" "}
                        {review.name}{" "}
                        <span className="font-normal text-sm text-gray-400">
                          {" "}
                          {review.email}{" "}
                        </span>
                      </p>
                    </div>
                  </TableCell>
                  <TableCell> {review.review} </TableCell>
                  <TableCell>
                    {" "}
                    <div className=" flex flex-col gap-2">
                      <p className="font-bold"> {review.response.name} </p>
                      <p className="font-normal text-gray-400">
                        {" "}
                        {review.response.type}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className=" flex flex-col gap-2">
                      <p className="font-bold">{review.submit.date}</p>
                      <p className=" font-normal text-gray-400">
                        at {review.submit.time}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link
                      href="/view"
                      className=" bg-white border border-primary font-bold text-primary rounded-md px-4 py-2"
                    >
                      {" "}
                      View{" "}
                    </Link>
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

export default Commentts;
