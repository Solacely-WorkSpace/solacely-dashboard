import React from "react";
import { cn } from "../../../lib/cn";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const TableFooter = ({ className, ...props }: TableProps) => {
  return (
     <tfoot
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props} />
  );
};

export  {TableFooter};
