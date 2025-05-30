"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";

export type SheetTitleProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> & {
  className?: string;
};

const SheetTitle = React.forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <SheetPrimitive.Title
        data-slot="sheet-title"
        className={cn("text-foreground font-semibold", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

SheetTitle.displayName = "SheetTitle";

export { SheetTitle };
