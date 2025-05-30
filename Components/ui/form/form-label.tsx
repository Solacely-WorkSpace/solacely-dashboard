import * as React from "react";
import useFormField from "../../../hooks/use-form-field";
import { cn } from "../../../lib/cn";
import { Label } from "../label";

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <Label
        data-slot="form-label"
        data-error={!!error}
        className={cn("data-[error=true]:text-destructive", className)}
        htmlFor={formItemId}
        ref={ref}
        {...props}
      />
    );
  }
);

FormLabel.displayName = "FormLabel";

export  {FormLabel};
