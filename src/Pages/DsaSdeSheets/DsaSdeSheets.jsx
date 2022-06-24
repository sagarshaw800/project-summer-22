import { Paper, Typography } from "@mui/material";
import React from "react";

const DsaSdeSheets = () => {
  return (
    <Paper
      sx={{
        width: "100vw",
        paddingLeft:"320px",
        height: "90vh",
        backgroundColor: "#6c757d",
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: -3,
        right: 5,
        margin: "8px 2px",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h3">Dsa Sde Sheets</Typography>
    </Paper>
  );
};

export default DsaSdeSheets;
