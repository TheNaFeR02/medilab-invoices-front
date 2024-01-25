import { Chip } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { Company } from "@/components/Table/types/Company";

//should be memoized or stable
import React from "react";

export default function tableColumns() {
  const columns = useMemo<MRT_ColumnDef<Company>[]>(
    () => [
      {
        accessorKey: "Nit", //access nested data with dot notation
        header: "NIT",
        size: 150,
      },
      {
        accessorKey: "Name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "YoY", //normal accessorKey
        header: "YoY",
        size: 200,
      },
      {
        accessorKey: "Performance",
        header: "Performance",
        size: 150,
      },
      {
        accessorKey: "Status",
        header: "Status",
        size: 150,
        //chip
        Cell: ({ cell }) => (
          <Chip
            label={cell.getValue()?.toString()}
            color={cell.getValue() === "Active" ? "success" : "error"}
          />
        ),
      },
    ],
    []
  );
  return columns;
}
