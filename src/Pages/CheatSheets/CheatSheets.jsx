import React, { useState } from "react";
import { Box, Paper, Tabs, Tab } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CheatSheets = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("html");

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: "100vw",
          paddingLeft: { xs: "10px", md: "320px" },
          height: "90vh",
          backgroundColor: "transparent",
          position: "absolute",
          zIndex: -3,
          right: 5,
          margin: "8px 2px",
          overflowY: "scroll",
          overflowWrap:'break-word'
        }}
      >
        <Box
          sx={{
            width: {xs:"100%", md:"96%"},
            position: "sticky",
            top:'0',
            color:'#70e000',
            backgroundColor: "#6c757d",
          }}
        >
          <Tabs
            value={value}
            onChange={(e, newVal) => {
              setValue(newVal);
            }}
            textColor="inherit"
            indicatorColor="white"
          >
            <Tab
              value="html"
              label="HTML"
              onClick={() => {
                navigate("html");
              }}
              sx={{ fontFamily: "Chakra Petch"}}
            >
            </Tab>

            <Tab
              value="css"
              label="CSS"
              onClick={() => {
                navigate("css");
              }}
              sx={{ fontFamily: "Chakra Petch"}}
            />
            <Tab
              value="javasript"
              label="JAVASCRIPT"
              onClick={() => {
                navigate("javascript");
              }}
              sx={{ fontFamily: "Chakra Petch"}}
            />
          </Tabs>
        </Box>
        <Outlet />
      </Paper>
    </>
  );
};

export default CheatSheets;

/*
onClick={() => {
                navigate("html");
              }}
*/
