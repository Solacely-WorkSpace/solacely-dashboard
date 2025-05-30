import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
export type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> & {
  className?: string;
};

const SheetDescription = React.forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <SheetPrimitive.Description
        data-slot="sheet-description"
        className={cn("text-muted-foreground text-sm", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

SheetDescription.displayName = "SheetDescription";

export { SheetDescription };
