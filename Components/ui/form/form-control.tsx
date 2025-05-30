import { Slot } from "@radix-ui/react-slot";
import useFormField from "../../../hooks/use-form-field";

const  FormControl = ({
  ...props
}) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props} />
  );
}
export  {FormControl};