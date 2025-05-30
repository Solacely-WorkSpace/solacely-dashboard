"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipTriggerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>;

const TooltipTrigger = React.forwardRef<HTMLElement, TooltipTriggerProps>(
  (props, ref) => {
    return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" ref={ref} {...props} />;
  }
);

TooltipTrigger.displayName = "TooltipTrigger";

export { TooltipTrigger };
