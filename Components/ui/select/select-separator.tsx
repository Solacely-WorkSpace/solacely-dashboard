"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../../../lib/cn";

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & {
  className?: string;
};

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.Separator
        data-slot="select-separator"
        className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

SelectSeparator.displayName = "SelectSeparator";

export { SelectSeparator };
