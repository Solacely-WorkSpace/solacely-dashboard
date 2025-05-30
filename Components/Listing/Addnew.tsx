import { useFieldArray, UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/zzzz_form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdAddBox, MdCancel } from "react-icons/md";

type AddNewProps = {
  label: string;
  name: string;
  placeholder?: string;
  form: UseFormReturn<any>; 
};

const Addnew = ({ label, form, placeholder, name }: AddNewProps) => {
  const { control } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="mb-6">
      <p className="font-medium text-[0.8rem] uppercase mb-2">{label}</p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center mb-6">
            <FormField
              name={`${name}.${index}`}
              control={control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder={placeholder}
                      type="text"
                      {...field}
                      className="w-full py-6 px-2 border-2 border-slate-200"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="button"
              onClick={() => remove(index)}
              className="ml-2 text-red-500 bg-transparent hover:bg-red-100 rounded-full p-2"
            >
              <MdCancel size={20} />
            </Button>
          </div>
        ))}
      </div>

      <Button type="button" onClick={() => append("")} className="mb-6">
        <MdAddBox size={20} /> Add New
      </Button>
    </div>
  );
};

export default Addnew;
