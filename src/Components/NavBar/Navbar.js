import { Box, IconButton, Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import { Button } from "@mui/material";




const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{bgcolor:'#343a40'}}>
        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
        }}>

          {/* //!Left Section */}
          <Box sx={{
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            width:'250px'
          }}>
            <IconButton size='large'>
              <CodeIcon sx={{color:'#99d98c'}} size='inherit'/>
            </IconButton>
            <Typography variant='h6' sx={{fontFamily:'Lobster', color:'#f6fff8'}}>
              OneStopCoding
            </Typography>
          </Box>

          {/* //!Right Section */}

          <Box sx={{
            width:'320px',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
          }}>
            {
              ['Home', 'About', 'LogIn'].map((item)=>(
                <Button sx={{color:'#eaf4f4', fontFamily: 'Chakra Petch'}}>{item}</Button>
              ))
            }
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
