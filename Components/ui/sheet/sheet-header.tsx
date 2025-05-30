"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        data-slot="sheet-header"
        className={cn("flex flex-col gap-1.5 p-4", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

SheetHeader.displayName = "SheetHeader";

export { SheetHeader };
