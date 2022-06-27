import {Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { dsaSdeSheetContext } from "../../Context/DsaSdeSheetContext";

const DsaSdeSheets = () => {
  const {DsaSdeSheetData}=useContext(dsaSdeSheetContext);
  return (
    <Paper
      sx={{
        width: "100vw",
        paddingLeft:{xs:"0px", md:"290px"},
        height: "92vh",
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: -3,
        // right: 5,
        // margin: "8px 2px",
        overflowY: "scroll",
        scrollbarWidth:'none',
        display:"flex",
        justifyContent:'space-around',
        alignItems:"center",
        flexWrap:"wrap"
      }}
    > 

      {DsaSdeSheetData.map((item)=>(
        <Card sx={{padding:"20px", margin:"20px", display:"flex", 
         justifyContent:"center", flexDirection:'column', alignItems:'center', bgcolor:"#e9ecef",
         boxShadow:'0 0 8px #212529'}}>
          <CardMedia component="img"
        sx={{
          width:'244px',
        }}
        image={item.pic}
        alt={item.name}
          />
          <CardContent>
            <Typography sx={{fontFamily: "Chakra Petch",fontSize: "1.1rem"}}>
              {item.name}
              </Typography></CardContent>
          <CardActions><Button href={item.link} target="_blank" variant="outlined">Get Sde Sheet</Button></CardActions>
        </Card>
      ))}
    </Paper>
  );
};

export default DsaSdeSheets;
