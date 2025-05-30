import React from "react";
import { cn } from "../../../lib/cn";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const TableBody = ({ className, ...props }: TableProps) => {
  return (
     <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props} />
  );
};

export  {TableBody};
