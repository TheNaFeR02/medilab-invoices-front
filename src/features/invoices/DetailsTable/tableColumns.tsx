import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { Service } from "@/features/invoices/DetailsTable/types/Service";

//should be memoized or stable

export default function tableColumns() {
  const columns = useMemo<MRT_ColumnDef<Service>[]>(
    () => [
      {
        accessorKey: "Service", //access nested data with dot notation
        header: "Service/Product",
        size: 350,
      },
      {
        accessorKey: "Date",
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "TotalAmount", //normal accessorKey
        header: "Total amount",
        size: 70,
      },
      {
        accessorKey: "PendingAmount",
        header: "Pending amount",
        size: 70,
      },
    ],
    []
  );
  return columns;
}

