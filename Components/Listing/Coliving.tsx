"use client";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { Button } from "../ui/button";
import BasicInfo from "./BasicInfo";
import Spaces from "./Spaces";
import Payment from "./Payment";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/zzzz_form";
import { ListingSchema } from "../../schemas/listing-schema";
import { cn } from "../../lib/cn";

const Coliving = () => {
  const [activeComponent, setActiveComponent] = useState("BasicInfo");

  const form = useForm({
    resolver: zodResolver(ListingSchema),
  });

  const onSubmit = (data:any) => {
    console.log(data);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "BasicInfo":
        return <BasicInfo form={form} />;
      case "Spaces":
        return <Spaces form={form} />;
      case "Payment":
        return <Payment form={form} />;
      default:
        return <BasicInfo form={form} />;
    }
  };

  const handleTabClick = (component:string) => {
    setActiveComponent(component);
  };

  const tabs = [
    { name: "Basic Information", component: "BasicInfo" },
    { name: "Payment Breakdown", component: "Payment" },
    { name: "Spaces", component: "Spaces" },
  ];

  return (
    <div>
      <Link
        href="/admin/spaces/co-space"
        className=" flex items-center gap-2 text-gray-500 text-sm font-semibold cursor-pointer"
      >
        <FaChevronLeft size={10} />{" "}
        <span className="text-neutral-500 font-medium text-xs"> Go Back</span>
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" flex justify-between items-center mt-10 px-4">
            <h1 className="text-2xl font-bold"> Property </h1>
            <div>
              <Button
                className={cn(
                  " bg-transparent border border-neutral-200 text-primary p-6 hover:bg-neutral-100 hover:text-neutral-600 transition-all duration-200 ease-in-out cursor-pointer"
                )}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className={cn(
                  " ml-4 p-6 hover:bg-blend-color transition-all duration-200 ease-in-out cursor-pointer"
                )}
              >
                Save
              </Button>
            </div>
          </div>

          <div>
            <ul className=" inline-flex gap-10 px-4 text-sm text-neutral-500 mt-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`cursor-pointer py-4 ${
                    activeComponent === tab.component
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : ""
                  }`}
                  onClick={() => handleTabClick(tab.component)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>

          {<div className="mt-10 px-4">{renderComponent()}</div>}
        </form>
      </Form>
    </div>
  );
};

export default Coliving;
