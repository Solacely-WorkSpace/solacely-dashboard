import * as React from "react";
import useFormField from "../../../hooks/use-form-field";
import { cn } from "../../../lib/cn";

export interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      ref={ref}
      {...props}
    />
  );
});

FormDescription.displayName = "FormDescription";

export  {FormDescription};
