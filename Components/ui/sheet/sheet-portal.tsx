
import * as SheetPrimitive from "@radix-ui/react-dialog";

export type SheetPortalProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Portal>;

const SheetPortal = (props: SheetPortalProps) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
};

export { SheetPortal };
