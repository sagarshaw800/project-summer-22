import React from "react";
import { Paper, Typography } from "@mui/material";
const DailyProblems = () => {
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
      <Typography variant="h3">Daily Problems</Typography>
    </Paper>
  );
};

export default DailyProblems;
