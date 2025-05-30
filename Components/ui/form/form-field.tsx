import * as React from "react";
import { createContext } from "react";
import { Controller, ControllerProps, FieldValues } from "react-hook-form";

interface FormFieldContextValue {
  name: string;
}

export const FormFieldContext = createContext<
  FormFieldContextValue | undefined
>(undefined);

export type FormFieldProps<T extends FieldValues = FieldValues> =
  ControllerProps<T>;

function FormField<T extends FieldValues>({
  name,
  render,
  ...rest
}: FormFieldProps<T>) {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller name={name} render={render} {...rest} />
    </FormFieldContext.Provider>
  );
}

export  {FormField};
