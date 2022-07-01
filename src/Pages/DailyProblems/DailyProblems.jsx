import React, { useContext } from "react";
import { Paper, Typography, Box, Stack, Link } from "@mui/material";
import { potdDataContext } from "../../Context/PotdDataContext";

const DailyProblems = () => {
  const { potdData } = useContext(potdDataContext);

  return (
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
        overflowY: "hidden",
      }}
    >
      <Paper
        variant="outlined"
        color="success"
        sx={{ width: "250px", margin: " 10px auto" }}
      >
        <Typography
          sx={{
            fontFamily: "Chakra Petch",
            textAlign: "center",
            padding: "5px 0",
          }}
        >
          Problem Of The Day
        </Typography>
      </Paper>

      <Stack spacing={5} sx={{ paddingTop: "40px" }}>
        {potdData.map((item) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap:"wrap"
            }}
          >
            <Paper sx={{ padding: "4px 8px 2px 8px" }}>
              <img src={item.logo} height="25px" width="100px" alt="logo"/>
            </Paper>
            <Link href={item.link}
              target="_blank"
              underline="none"
              sx={{
                width: {xs:"85%", sm:"70%"},
                textTransform: "capitalize",
                border: "1px solid #70e000aa",
                borderRadius: "5px",
                padding: "4px 10px",
                marginTop:{xs:"15px",sm:"0px"},
                color:"white",
                ['&:hover']:{border:"1px solid #70e000", color:"#70e000"},
              }}>
              <Box>
                <Typography sx={{ textAlign: "center" }}>
                  {item.title}
                </Typography>
              </Box>
            </Link>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default DailyProblems;
