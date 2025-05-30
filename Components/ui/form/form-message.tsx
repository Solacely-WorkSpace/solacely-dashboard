import * as React from "react";
import useFormField from "../../../hooks/use-form-field";
import { cn } from "../../../lib/cn";

export interface FormMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();

    const body = error ? String(error?.message ?? "") : children;

    if (!body) {
      return null;
    }

    return (
      <p
        data-slot="form-message"
        id={formMessageId}
        className={cn("text-destructive text-sm", className)}
        ref={ref}
        {...props}
      >
        {body}
      </p>
    );
  }
);

FormMessage.displayName = "FormMessage";

export  {FormMessage};
