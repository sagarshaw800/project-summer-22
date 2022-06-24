import React from "react";
import { Paper, Typography } from "@mui/material";
const DsaNotes = () => {
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
      <Typography variant="h3">Dsa Notes</Typography>
    </Paper>
  );
};

export default DsaNotes;
