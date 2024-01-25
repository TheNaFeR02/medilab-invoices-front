import { Box, IconButton, Divider } from "@mui/material";
import { table } from "console";
import { MRT_ToggleGlobalFilterButton } from "material-react-table";
import React from "react";
import {
  Add as AddIcon,
  Email as EmailIcon,
  Tune as TuneIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";

interface Props {
  table: any;
}

export default function ToolbarInternalActions({ table }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        color: "text.secondary",
        "& svg": {
          m: 1,
        },
        "& hr": {
          mx: 0.5,
        },
      }}
    >
      <MRT_ToggleGlobalFilterButton table={table} />
      <IconButton
        onClick={() => {
          alert(
            "Not implemented yet! Sorry :(" +
              "\n\n" +
              "Navigate to a new page or Modal to create a new company."
          );
        }}
      >
        <AddIcon />
      </IconButton>
      <Divider orientation="vertical" variant="middle" flexItem />
      <IconButton
        onClick={() => {
          alert("Not implemented yet! Sorry :(" + "\n\n" + "Open filters.");
        }}
      >
        <TuneIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          alert(
            "Not implemented yet! Sorry :(" +
              "\n\n" +
              "Mailto: all selected companies."
          );
        }}
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          alert(
            "Not implemented yet! Sorry :(" +
              "\n\n" +
              "Dowload the table in CSV or Excel format."
          );
        }}
      >
        <DownloadIcon />
      </IconButton>
    </Box>
  );
}
