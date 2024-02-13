import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { Invoice } from "./types/Invoice";
import { Chip } from "@mui/material";



//should be memoized or stable

export default function tableColumns(filterStatus: string) {
  const columns = useMemo<MRT_ColumnDef<Invoice>[]>(
    () => [
      {
        accessorKey: "Number", //access nested data with dot notation
        header: "Invoice number",
        size: 170,
      },
      {
        accessorKey: "Date",
        header: "Invoice date",
        size: 100,
      },
      {
        accessorKey: "Customers", //normal accessorKey
        header: "Customers",
        size: 250,
      },
      {
        accessorKey: "TotalAmount",
        header: "Total amount",
        size: 70,
      },
      {
        accessorKey: "DueDate",
        header: "Due Date",
        size: 150,
        Cell: ({ cell }) => {

          const date = cell.getValue() as Date;

          const day = date.getDate().toString();
          const month = date.toLocaleDateString('en-US', { month: 'short' });
          const year = date.getFullYear().toString();

          return <p>{day + " " + month + " " + year}</p>
        }
      },
      {
        accessorKey: "Status",
        header: "Status",
        size: 100,
        Cell: ({ cell }) => {
          const cellValue = cell.getValue()?.toString();

          if (cellValue === 'Overdue') {
            return <Chip
              label={cell.getValue()?.toString()}
              color="error"
            />;
          }

          if (cellValue === 'Paid') {
            return <Chip
              label={cell.getValue()?.toString()}
              color="success"
            />;
          }

          if (cellValue === 'Pending') {
            return <Chip
              label={cell.getValue()?.toString()}
              color="warning"
            />;
          }

          else {
            return <p>{cell.getValue()?.toString()}</p>;
          }
        },
      },
      {
        accessorKey: "Email",
        header: "Email",
        size: 0,
        // hide this column


      },
    ],
    []
  );
  return columns;
}

