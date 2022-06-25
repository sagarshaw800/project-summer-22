import { Box, IconButton, Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import React, { useContext } from "react";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { openDrawerDataContext } from "../../Context/OpenDrawerDataContext";

const Navbar = () => {
  const { openDrawer, setOpenDrawer } = useContext(openDrawerDataContext);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#343a40" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* //!Left Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "250px",
            }}
          >
            <IconButton size="large">
              <CodeIcon sx={{ color: "#70e000" }} size="inherit" />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Lobster", color: "#f6fff8" }}
            >
              OneStopCoding
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
            <IconButton
              sx={{ color: "white", marginRight: "20px" }}
              onClick={(e) => setOpenDrawer(!openDrawer)}
            >
              {openDrawer ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
