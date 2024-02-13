"use client";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Service } from "./types/Service";
import { services } from "./data/services";
import tableColumns from "./tableColumns";
import TopToolbarCustomActions from "./TopToolbarCustomActions";
import ToolbarInternalActions from "./ToolbarInternalActions";
import BottomToolbarCustomActions from "./BottomToolbarCustomActions";

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

    muiTableHeadCellProps: {
      sx: {
        backgroundColor: "surfaceContainerHighest.main",
      },
    },

    muiPaginationProps: {
      rowsPerPageOptions: [1, 2, 5, 10, 25, 50, 100],
    },
    paginationDisplayMode: "pages",
  });

  return <MaterialReactTable table={table} />;
};

export default NewInvoiceTable;
