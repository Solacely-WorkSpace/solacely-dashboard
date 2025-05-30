"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../../lib/cn";

export type SelectScrollDownButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & {
  className?: string;
};

const SelectScrollDownButton = React.forwardRef<HTMLDivElement, SelectScrollDownButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.ScrollDownButton
        data-slot="select-scroll-down-button"
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        ref={ref}
        {...props}
      >
        <ChevronDownIcon className="size-4" />
      </SelectPrimitive.ScrollDownButton>
    );
  }
);

SelectScrollDownButton.displayName = "SelectScrollDownButton";

export { SelectScrollDownButton };
