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

// Zod Schemas End 


