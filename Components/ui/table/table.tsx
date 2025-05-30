import React from "react";
import { cn } from "../../../lib/cn";

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const Table = ({ className, ...props }: TableProps) => {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
};

export  {Table};
