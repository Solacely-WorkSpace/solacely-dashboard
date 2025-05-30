"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectGroupProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  (props, ref) => {
    return <SelectPrimitive.Group data-slot="select-group" ref={ref} {...props} />;
  }
);

SelectGroup.displayName = "SelectGroup";

export { SelectGroup };
