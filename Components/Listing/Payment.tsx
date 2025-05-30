"useclient";
import { cn } from "../../lib/cn";
import { FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";

const Payment = ({ form }) => {
  return (
    <div>
      <div className=" grid grid-cols-2 gap-4">
        <FormField
          name="light"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(" uppercase text-xs font-medium")}>
                {" "}
                Light Fee{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type={"number"}
                  placeholder="Enter Amount"
                  {...field}
                  className={cn(" px-2 py-6 border-2 border-slate-200")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="security"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(" uppercase text-xs font-medium")}>
                {" "}
                Security Fee{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type={"number"}
                  placeholder="Enter Amount"
                  {...field}
                  className={cn(" px-2 py-6 border-2 border-slate-200")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="estate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(" uppercase text-xs font-medium")}>
                {" "}
                Estate Due{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type={"number"}
                  placeholder="Enter Amount"
                  {...field}
                  className={cn(" px-2 py-6 border-2 border-slate-200")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="bin"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(" uppercase text-xs font-medium")}>
                {" "}
                Bin Contibution{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type={"number"}
                  placeholder="Enter Amount"
                  {...field}
                  className={cn(" px-2 py-6 border-2 border-slate-200")}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default Payment;
