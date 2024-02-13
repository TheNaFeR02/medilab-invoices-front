"use client";
import {useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Service } from "@/features/invoices/NewInvoiceTable/types/Service";
import { services } from "@/features/invoices/NewInvoiceTable/data/services";
import tableColumns from "@/features/invoices/NewInvoiceTable/tableColumns";
import TopToolbarCustomActions from "@/features/invoices/NewInvoiceTable/TopToolbarCustomActions";
import ToolbarInternalActions from "@/features/invoices/NewInvoiceTable/ToolbarInternalActions";
import BottomToolbarCustomActions from "@/features/invoices/NewInvoiceTable/BottomToolbarCustomActions";

const initialData: Service[] = services;
const NewInvoiceTable = () => {
  const columns = tableColumns();
  const [data, setData] = useState<Service[]>(initialData);
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: false,
    enableColumnActions: false,
    enableSorting: false,
    enableRowActions: false,
    enableSelectAll: false,
    
    renderTopToolbarCustomActions: () => <TopToolbarCustomActions />,

    renderToolbarInternalActions: ({ table }) => <ToolbarInternalActions table={table} />,

    // Aquí puedes agregar más acciones en la parte inferior de la tabla
    renderBottomToolbarCustomActions: ({ table }) => <BottomToolbarCustomActions table={table} />,

    muiPaginationProps: {
      rowsPerPageOptions: [1, 2, 5, 10, 25, 50, 100],
    },
    paginationDisplayMode: "pages",
  });

  return <MaterialReactTable table={table}/>;
};

export default NewInvoiceTable;
