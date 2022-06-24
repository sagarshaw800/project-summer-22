import React from "react";
import { Paper, Typography } from "@mui/material";
const DailyProblems = () => {
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
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#70e000",
        borderRadius: "5px",
      }}
    >
      <Typography variant="h3">Daily Problems</Typography>
    </Paper>
  );
};

export default DailyProblems;
