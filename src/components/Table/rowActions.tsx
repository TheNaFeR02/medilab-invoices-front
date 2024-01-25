import { Box, IconButton } from "@mui/material";
import { table } from "console";
import React from "react";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { MRT_Row } from "material-react-table";
import { Company } from "./types/Company";

interface Props {
  table: any;
  row: MRT_Row<Company>;
}

export default function rowActions({ table, row }: Props) {
  return (
    <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
      {/* Contenido que aparecerá al hacer hover */}
      <IconButton
        onClick={() => {
          table.setEditingRow(row);
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          alert(
            "Not implemented yet! Sorry :(" +
              "\n\n" +
              "Delete " +
              row.getValue("Name")
          );
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
