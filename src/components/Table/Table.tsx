"use client";
import {useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Company } from "@/components/Table/types/Company";
import { companies } from "@/components/Table/data/companies";
import tableColumns from "@/components/Table/tableColumns";
import rowActions from "@/components/Table/rowActions";
import TopToolbarCustomActions from "@/components/Table/TopToolbarCustomActions";
import ToolbarInternalActions from "@/components/Table/ToolbarInternalActions";
import BottomToolbarCustomActions from "./BottomToolbarCustomActions";

const initialData: Company[] = companies;
const Table = () => {
  const columns = tableColumns();
  const [data, setData] = useState<Company[]>(initialData);
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true,
    enableColumnActions: false,
    enableRowActions: true,
    positionActionsColumn: "last",
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "",
      },
    },
    renderRowActions: ({ table, row }) => rowActions({ table, row }),

    renderTopToolbarCustomActions: () => <TopToolbarCustomActions />,

    renderToolbarInternalActions: ({ table }) => <ToolbarInternalActions table={table} />,

    // Aquí puedes agregar más acciones en la parte inferior de la tabla
    renderBottomToolbarCustomActions: ({ table }) => <BottomToolbarCustomActions table={table} />,

    muiPaginationProps: {
      rowsPerPageOptions: [1, 2, 5, 10, 25, 50, 100],
    },
    paginationDisplayMode: "pages",
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
