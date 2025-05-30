import * as SheetPrimitive from "@radix-ui/react-dialog";
import { forwardRef } from "react";

export type SheetTriggerProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>;

const SheetTrigger = forwardRef<HTMLButtonElement, SheetTriggerProps>(
  (props, ref) => {
    return <SheetPrimitive.Trigger data-slot="sheet-trigger" ref={ref} {...props} />;
  }
);

SheetTrigger.displayName = "SheetTrigger";

export { SheetTrigger };
