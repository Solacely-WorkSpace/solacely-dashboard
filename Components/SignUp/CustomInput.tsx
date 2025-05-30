import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, FieldValues } from "react-hook-form";
import * as React from "react";

type CustomInputProps = {
  control: Control<FieldValues>;
  name: string;
  placeholder?: string;
  type?: string;
  label?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  control,
  placeholder,
  name,
  type = "text",
  label,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-black font-semibold font-rob">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              className="w-full py-5 px-4 border border-slate-300 outline-none rounded-sm focus:outline-none focus:outline-tertially focus:border-2 focus:border-tertially focus:ring-0 focus:ring-tertially focus:bg-white font-rob text-sm transition duration-300 ease-in-out"
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
