import { Box } from "@mui/material";
import { Paper, Typography } from "@mui/material";
import React from "react";
import logInPicmod from "../../assets/images/logIn/logInPicmod.jpg";

const LogInPage = () => {
  return (
    <Paper
    elevation={0}
      sx={{
        width: "100vw",
        paddingLeft: { xs: "10px", md: "320px" },
        height: "90vh",
        backgroundColor: "#495057",
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
            color: "#fff",
            margin: "80px 15px 0 15px",
          }}
        >
          Service will be available soon...
        </Typography>
        <img src={logInPicmod} alt="This section is under construction" width="100%"/>
      </Box>
    </Paper>
  );
};

export default LogInPage;
