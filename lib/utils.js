import Endpoint from "@/api/Endpoint";
import { clsx } from "clsx";

import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const CurrencyFormatter = (data) => {
  const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  
   return formatter.format(data);
} 


// Zod Schemas 

export const RegisterSchema =  z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(4, "Name must be at least 4 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "Must macth password"),
  mobile: z.string().min(7, "Mobile number must be at least 11 characters long"),
  location: z.string().min(4, "Location must be at least 4 characters long"),

}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Invalid password"),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const OtpSchema = z.object({
  otp: z.number().min(4, "Invalid OTP"),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "Must macth password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
});


export const ListingSchema = z.object({
  title: z.string().min(4, "Title must be at least 4 characters long"),
  price: z.string().min(2, " price should be above 40"),
  address: z.string().min(4, "Location must be at least 4 characters long"),
  detail: z.string().min(10, "Description must be at least 10 characters long"),
  buildingType: z.string().min(4, "Select a type"),
  light: z.string().min(2, " Light fee is required"),
  estate: z.string().min(2, "Estate fee is required"),
  bin: z.string().min(2, "Enter bin fee"),
  security: z.string().min(2, "Enter security fee"),
  insurance: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  maintainace: z.string().min(2, " Select who handles the maintainace").optional().or(z.literal("")),
  optionFee: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  terminationConditions: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  expiryDate: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  rentCredit: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  buyPrice: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  monthlyRent: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  rentalPeriod: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  optionToBuy: z.string().min(2, " Select who handles the insurance").optional().or(z.literal("")),
  period: z.string().min(4, "Select a period"),
  status: z.string().min(4, "Select a avalability"),
  agent: z.string().min(4, "Select an agent"),
  size: z.string().min(1, "Size must be at least 2ft"),
  bed: z.string().min(1, "There must be at least 1 bedroom"),
  garage: z.string().min(0, "There must be at least 0 garage"),
  bath: z.string().min(1, "There must be at least 1 bathroom"),
  defects: z.string().optional(),
  amenities: z.string().optional(),
  bedroom: z.array(z.instanceof(File)).min(1, "Bedroom Image is required"),
  bathroom:z.array(z.instanceof(File)).min(1, "Bathroom Image is required"),
  livingroom: z.array(z.instanceof(File)).min(1, "Livingroom Image is required"),
  kitchen: z.array(z.instanceof(File)).min(1, "Kitchen Image is required"),

  vr: z.any().optional(),

  video: z.any().optional()
})


// Zod Schemas End 

export const shortName = (fullname) => {
  const name = fullname;
  const splitName = name.split(" ");
  const firstName = splitName[0];
  const lastInitial = splitName[1] ? splitName[1][0] + "." : "";
  
  return `${firstName} ${lastInitial}`
}


export const UploadApartment = async (data, setIsLoading) => {
  try {
      setIsLoading(true);
      const response = await Endpoint.post("apart/listings/", data);
      if(response.status === 200) {

         toast.success("Apartment Listed");
         
      } else {
        toast.error(" Apartment Listing Failed Try Again!");
       
      }
  } catch (error) {
    console.log("Error:", error.message);
    toast.error("Something went wrong try again later");
  }finally {
    setIsLoading(false);
  }

  
}

