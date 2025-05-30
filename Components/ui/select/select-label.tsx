"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../../../lib/cn";

export type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & {
  className?: string;
};

const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.Label
        data-slot="select-label"
        className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

SelectLabel.displayName = "SelectLabel";

export { SelectLabel };
