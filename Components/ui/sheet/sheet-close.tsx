import * as SheetPrimitive from "@radix-ui/react-dialog";
import { forwardRef } from "react";

export type SheetCloseProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>;

const SheetClose = forwardRef<HTMLButtonElement, SheetCloseProps>(
  (props, ref) => {
    return <SheetPrimitive.Close data-slot="sheet-close" ref={ref} {...props} />;
  }
);

SheetClose.displayName = "SheetClose";

export { SheetClose };
