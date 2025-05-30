import { MinusIcon } from "lucide-react";
import * as React from "react";

export type InputOTPSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

const InputOTPSeparator = ({ ...props }: InputOTPSeparatorProps) => {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
};

export { InputOTPSeparator };
