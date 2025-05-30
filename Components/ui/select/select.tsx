"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

const Select = (props: SelectProps) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};

export { Select };
