"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectValueProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  (props, ref) => {
    return <SelectPrimitive.Value data-slot="select-value" ref={ref} {...props} />;
  }
);

SelectValue.displayName = "SelectValue";

export { SelectValue };
