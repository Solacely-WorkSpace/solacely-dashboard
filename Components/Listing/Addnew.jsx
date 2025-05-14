import { useState } from "react";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdAddBox, MdCancel } from "react-icons/md";
import { cn } from "@/lib/utils";

const Addnew = ({ label, form, placeholder }) => {
  const [inputFields, setInputFields] = useState(1);

  const addInput = () => {
    setInputFields((prev) => prev + 1);
  };

  const removeInputs = (index) => {
    form.unregister(`input-${index}`);
    setInputFields((prev) => prev - 1);
  };

  return (
    <div className=" mb-6">
      <p className=" font-medium text-[0.8rem] uppercase mb-2">{label}</p>

      <div className=" grid grid-cols-2 gap-x-4 gap-y-8 ">
        {Array.from({ length: inputFields }).map((_, index) => (
          <div key={index} className=" flex gap-2 items-center mb-6">
            <FormField
              name={`inputField-${index}`}
              control={form.control}
              render={({ field }) => (
                <FormItem className={cn(" w-full")}>
                  <FormControl>
                    <Input
                      placeholder={placeholder}
                      type={"text"}
                      {...field}
                      className={cn(
                        " w-full py-6 px-2 border-2 border-slate-200"
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="button"
              onClick={() => removeInputs(index)}
              className=" ml-2 text-red-500 bg-transparent hover:bg-red-100 rounded-full p-2"
            >
              <MdCancel size={20} />
            </Button>
          </div>
        ))}
      </div>

      <Button type="button" onClick={addInput} className={cn("mb-6")}>
        <MdAddBox size={20} /> Add New
      </Button>
    </div>
  );
};

export default Addnew;
