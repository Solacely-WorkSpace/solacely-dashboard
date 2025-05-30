import React from "react";
import { cn } from "../../../lib/cn";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const TableRow = ({ className, ...props }: TableProps) => {
  return (
   <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props} />
  );
};

export  {TableRow};
