import React from "react";
import { Paper, Typography } from "@mui/material";
const DsaNotes = () => {
  return (
    <Paper
      sx={{
        width: "79vw",
        height: "90vh",
        backgroundColor: "#6c757d",
        position: "absolute",
        right: 5,
        margin: "8px 2px",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h3">Dsa Notes</Typography>
    </Paper>
  );
};

export default DsaNotes;
