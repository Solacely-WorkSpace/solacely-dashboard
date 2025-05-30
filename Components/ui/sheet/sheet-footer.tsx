"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
export type SheetFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        data-slot="sheet-footer"
        className={cn("mt-auto flex flex-col gap-2 p-4", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

SheetFooter.displayName = "SheetFooter";

export { SheetFooter };
