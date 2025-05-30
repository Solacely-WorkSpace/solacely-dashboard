
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipProviderProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> & {
  delayDuration?: number;
};

const TooltipProvider = ({ delayDuration = 0, ...props }: TooltipProviderProps) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
};

export { TooltipProvider };
