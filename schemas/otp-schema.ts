import { z } from "zod";

export const OtpSchema = z.object({
  otp: z.number().min(4, "Invalid OTP"),
});
