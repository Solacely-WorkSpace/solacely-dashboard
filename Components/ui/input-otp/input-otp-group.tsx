import * as React from "react";
import { cn } from "../../../lib/cn";

export interface InputOTPGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const InputOTPGroup = React.forwardRef<HTMLDivElement, InputOTPGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        data-slot="input-otp-group"
        className={cn("flex items-center gap-4", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

InputOTPGroup.displayName = "InputOTPGroup";

export { InputOTPGroup };
