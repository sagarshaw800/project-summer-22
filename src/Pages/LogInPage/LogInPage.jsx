import { Box } from "@mui/material";
import { Paper, Typography } from "@mui/material";
import React from "react";
import logInPic from "../../assets/images/logIn/logInPic.jpg";

const LogInPage = () => {
  return (
    <Paper
      sx={{
        width: "100vw",
        paddingLeft: { xs: "10px", md: "320px" },
        height: "91vh",
        backgroundColor: "#fff",
        position: "absolute",
        zIndex: -3,
        right: 5,
        margin: "8px 2px",
        overflowY: "hidden",
        display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width:{xs:"90%", sm:"auto"},
        }}
      >
        <Typography
          sx={{
            fontFamily: "Chakra Petch",
            fontSize: "28px",
            color: "#343a40",
            margin: "80px 15px 0 15px",
          }}
        >
          Service will be available soon...
        </Typography>
        <img src={logInPic} alt="This section is under construction" width="100%"/>
      </Box>
    </Paper>
  );
};

export default LogInPage;
