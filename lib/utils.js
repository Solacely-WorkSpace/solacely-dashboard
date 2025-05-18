import { clsx } from "clsx";
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
  price: z.number().min(6000, "Price must be at least 1"),
  location: z.string().min(4, "Location must be at least 4 characters long"),
  detail: z.string().min(10, "Description must be at least 10 characters long"),
  type: z.string().min(4, "Select a type"),
  period: z.string().min(4, "Select a period"),
  available: z.string().min(4, "Select a avalability"),
  agent: z.string().min(4, "Select an agent"),
  size: z.number().min(2, "Size must be at least 2ft"),
  bedroom: z.number().min(1, "There must be at least 1 bedroom"),
  garage: z.number().min(0, "There must be at least 0 garage"),
  bathroom: z.number().min(1, "There must be at least 1 bathroom"),
  defects: z.string().optional(),
  amenities: z.string().optional(),
  bedroomImage: z.any().refine((file) => file instanceof FileList && file.length > 0 , {
    message: " Bedroom image is required",
  }),
  bathroomImage: z.any().refine((file) => file instanceof FileList && file.length > 0 , {
    message: " Bathroom image is required",
  }),
  livingroomImage: z.any().refine((file) => file instanceof FileList && file.length > 0 , {
    message: " Livingroom image is required",
  }),
  kitchenImage: z.any().refine((file) => file instanceof FileList && file.length > 0 , {
    message: " Kitchen image is required",
  }),

  vr: z.any().optional(),

  video: z.any().optional()
})

export const shortName = (fullname) => {
  const name = fullname;
  const splitName = name.split(" ");
  const firstName = splitName[0];
  const lastInitial = splitName[1] ? splitName[1][0] + "." : "";
  
  return `${firstName} ${lastInitial}`
}
// Zod Schemas End 


