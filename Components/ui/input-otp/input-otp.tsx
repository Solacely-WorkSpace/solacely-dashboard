import * as React from "react";
import { OTPInput } from "input-otp";
import { cn } from "../../../lib/cn";

type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> & {
  className?: string;
  containerClassName?: string;
};

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ className, containerClassName, ...props }, ref) => {
    return (
      <OTPInput
        data-slot="input-otp"
        containerClassName={cn(
          "flex items-center gap-2 has-disabled:opacity-50",
          containerClassName
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

InputOTP.displayName = "InputOTP";

export { InputOTP };
