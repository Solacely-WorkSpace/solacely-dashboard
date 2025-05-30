import * as React from "react";
import { useId } from "react";
import { cn } from "../../../lib/cn";

interface FormItemContextValue {
  id: string;
}

export const FormItemContext = React.createContext<FormItemContextValue | undefined>(undefined);

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div
          data-slot="form-item"
          className={cn("grid gap-2", className)}
          ref={ref}
          {...props}
        />
      </FormItemContext.Provider>
    );
  }
);

FormItem.displayName = "FormItem";

export  {FormItem};
