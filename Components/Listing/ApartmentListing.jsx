"use client";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { Button } from "../ui/button";
import { cn, ListingSchema, UploadApartment } from "@/lib/utils";
import BasicInfo from "./BasicInfo";
import Rto from "./Rto";
import Payment from "./Payment";
import { useMemo, useState } from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ApartmentListing = () => {
  const [activeComponent, setActiveComponent] = useState("BasicInfo");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      title: "",
      price: "",
      address: "",
      detail: "",
      buildingType: "",
      period: "",
      status: "",
      agent: "",
      size: "",
      bedroom: [],
      garage: "",
      bath: "",
      defects: "",
      amenities: "",
      bed: "",
      bathroom: [],
      livingroom: [],
      kitchen: [],
      vr: [],
      video: [],
      light: "",
      security: "",
      estate: "",
      bin: "",
      optionToBuy: "",
      rentalPeriod: "",
      monthlyRent: "",
      buyPrice: "",
      rentCredit: "",
      optionFee: "",
      terminationConditions: "",
      maintainace: "",
      insurance: "",
      expiryDate: "",
    },
    mode: onchange,
  });

  const onError = (error) => {
    console.log("Validation Errors", error);
  };

  const onSubmit = (data) => {
    UploadApartment(data, setIsLoading);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "BasicInfo":
        return <BasicInfo form={form} />;
      case "Rto":
        return <Rto form={form} />;
      case "Payment":
        return <Payment form={form} />;
      default:
        return <BasicInfo form={form} />;
    }
  };

  const renderedComponent = useMemo(() => renderComponent(), [activeComponent]);

  const handleTabClick = (component) => {
    setActiveComponent(component);
  };

  const tabs = [
    { name: "Basic Information", component: "BasicInfo" },
    { name: "RTO Settings", component: "Rto" },
    { name: "Payment Breakdown", component: "Payment" },
  ];

  return (
    <div>
      <Link
        href="/admin/spaces"
        className=" flex items-center gap-2 text-gray-500 text-sm font-semibold cursor-pointer"
      >
        <FaChevronLeft size={10} />{" "}
        <span className="text-neutral-500 font-medium text-xs"> Go Back</span>
      </Link>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <div className=" flex justify-between items-center mt-10 px-4">
            <h1 className="text-2xl font-bold"> Property </h1>
            <div>
              <Button
                type="button"
                onClick={() => form.reset()}
                className={cn(
                  " bg-transparent border border-neutral-200 text-primary p-6 hover:bg-neutral-100 hover:text-neutral-600 transition-all duration-200 ease-in-out cursor-pointer"
                )}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !form.formState.isValid}
                className={cn(
                  " ml-4 p-6 hover:bg-blend-color transition-all duration-200 ease-in-out cursor-pointer"
                )}
              >
                {isLoading ? "Saving" : "Save"}
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

          {<div className={`mt-10 px-4 `}>{renderedComponent}</div>}
        </form>
      </Form>
    </div>
  );
};

export default ApartmentListing;
