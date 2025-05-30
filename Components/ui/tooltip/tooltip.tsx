"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipProvider } from "./tooltip-provider";

export type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;

const Tooltip = (props: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
};

export { Tooltip };
