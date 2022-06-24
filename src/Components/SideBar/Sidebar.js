import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useContext } from "react";
import { sidebarDataContext } from "../../Context/SidebarDataContext";
import { indexDataContext } from "../../Context/IndexDataContext";
import { styled } from "@mui/material/styles";
const Sidebar = () => {
  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const { listItems } = useContext(sidebarDataContext);
  const {selectedIndex , setSelectedIndex} = useContext(indexDataContext);

  const StyleWalaList = styled(List)({
    "& .Mui-selected": {
      color: "#70e000",
      "& .MuiListItemIcon-root": {
        color: "#70e000",
      },
    },
  });

  return (
    <Box>
      <Paper
        elevation={5}
        sx={{
          position: "absolute",
          zIndex: -1,
          top: "35px",
          height: "90vh",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#70e000",
          borderRadius: "5px",
          margin: "20px 2px",
          backgroundColor: "#6c757d",
        }}
      >
        <StyleWalaList>
          {listItems.map((item, index) => (
            <ListItemButton
              key={item.text}
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, item.id)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: "Chakra Petch",
                  fontSize: "0.8rem",
                }}
              ></ListItemText>
            </ListItemButton>
          ))}
        </StyleWalaList>
      </Paper>
    </Box>
  );
};

export default Sidebar;
