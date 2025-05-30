import React from "react";
import { cn } from "../../../lib/cn";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const TableCell = ({ className, ...props }: TableProps) => {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props} />
  );
};

export  {TableCell};
