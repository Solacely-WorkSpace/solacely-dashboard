import * as SheetPrimitive from "@radix-ui/react-dialog";

export type SheetProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root>;

const Sheet = (props: SheetProps) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

export { Sheet };
