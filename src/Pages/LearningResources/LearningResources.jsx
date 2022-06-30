import { Paper, Typography, Avatar, Box, Link } from "@mui/material";
import React, { useContext } from "react";
import { learningResourcesContext } from "../../Context/LearningResourcesContext";

const LearningResources = () => {
  const { resources1, resources2, resources3, resources4 } = useContext(
    learningResourcesContext
  );

  return (
    <Paper
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
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          margin: "10px 20px",
          borderRadius: "200px",
          bgcolor: "#6c757d",
          width: "150px",
        }}
      >
        <Typography sx={{fontFamily: "Chakra Petch", color:'#70e000'}}>Academics</Typography>
      </Paper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {resources1.map((item) => (
          <Link
            underline="none"
            sx={{ color: "black", fontFamily: "Chakra Petch", margin: "10px 20px", }}
            href={item.link}
            target="_blank"
          >
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "200px",
              }}
            >
              <Avatar
                sx={{ bgcolor: "dodgerblue", marginRight: "10px" }}
                src={item.logo}
              />
              {item.title}
            </Paper>
          </Link>
        ))}
      </Box>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          margin: "10px 20px",
          borderRadius: "200px",
          bgcolor: "#6c757d",
          width: "150px",
        }}
      >
        <Typography sx={{fontFamily: "Chakra Petch", color:'#70e000'}}>Coding</Typography>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {resources2.map((item) => (
          <Link
            underline="none"
            sx={{ color: "black", fontFamily: "Chakra Petch", margin: "10px 20px",}}
            href={item.link}
            target="_blank"
          >
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "200px",
              }}
            >
              <Avatar
                sx={{ bgcolor: "dodgerblue", marginRight: "10px" }}
                src={item.logo}
              />
              {item.title}
            </Paper>
          </Link>
        ))}
      </Box>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          margin: "10px 20px",
          borderRadius: "200px",
          bgcolor: "#6c757d",
          width: "150px",
        }}
      >
        <Typography sx={{fontFamily: "Chakra Petch", color:'#70e000'}}>Development</Typography>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {resources3.map((item) => (
          <Link
            underline="none"
            sx={{ color: "black", fontFamily: "Chakra Petch", margin: "10px 20px", }}
            href={item.link}
            target="_blank"
          >
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "200px",
              }}
            >
              <Avatar
                sx={{ bgcolor: "dodgerblue", marginRight: "10px" }}
                src={item.logo}
              />
              {item.title}
            </Paper>
          </Link>
        ))}
      </Box>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          margin: "10px 20px",
          borderRadius: "200px",
          bgcolor: "#6c757d",
          width: "250px",
        }}
      >
        <Typography sx={{fontFamily: "Chakra Petch", color:'#70e000'}}>Coding and Development</Typography>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {resources4.map((item) => (
          <Link
            underline="none"
            sx={{ color: "black", fontFamily: "Chakra Petch", margin: "10px 20px", }}
            href={item.link}
            target="_blank"
          >
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "200px",
              }}
            >
              <Avatar
                sx={{ bgcolor: "dodgerblue", marginRight: "10px" }}
                src={item.logo}
              />
              {item.title}
            </Paper>
          </Link>
        ))}
      </Box>
    </Paper>
  );
};

export default LearningResources;
