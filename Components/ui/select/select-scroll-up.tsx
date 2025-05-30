"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronUpIcon } from "lucide-react";
import { cn } from "../../../lib/cn";

export type SelectScrollUpButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & {
  className?: string;
};

const SelectScrollUpButton = React.forwardRef<HTMLDivElement, SelectScrollUpButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.ScrollUpButton
        data-slot="select-scroll-up-button"
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        ref={ref}
        {...props}
      >
        <ChevronUpIcon className="size-4" />
      </SelectPrimitive.ScrollUpButton>
    );
  }
);

SelectScrollUpButton.displayName = "SelectScrollUpButton";

export { SelectScrollUpButton };
