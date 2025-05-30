import { z } from "zod";

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