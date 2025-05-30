import * as React from "react";
import { useContext } from "react";
import { OTPInputContext } from "input-otp";
import { cn } from "../../../lib/cn";

export interface InputOTPSlotProps
  extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  className?: string;
}

const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } =
      inputOTPContext?.slots?.[index] ?? {};

    return (
      <div
        data-slot="input-otp-slot"
        data-active={isActive}
        className={cn(
          "data-[active=true]:border-1 data-[active=true]:border-neutral-400 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center bg-neutral-100 text-sm shadow-xs transition-all outline-none data-[active=true]:z-10 data-[active=true]:bg-white",
          className
        )}
        ref={ref}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
          </div>
        )}
      </div>
    );
  }
);

InputOTPSlot.displayName = "InputOTPSlot";

export { InputOTPSlot };
