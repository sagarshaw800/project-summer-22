import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useContext, useState } from "react";
import { sidebarDataContext } from "../../Context/SidebarDataContext";
import { indexDataContext } from "../../Context/IndexDataContext";
import { openDrawerDataContext } from "../../Context/OpenDrawerDataContext";
import { styled } from "@mui/material/styles";
const Sidebar = () => {
  const handleListItemClick1 = (event, index) => {
    setSelectedIndex(index);
  };

  const { openDrawer, setOpenDrawer } = useContext(openDrawerDataContext);
  const { listItems, listItems2 } = useContext(sidebarDataContext);
  const { selectedIndex, setSelectedIndex } = useContext(indexDataContext);

  const StyleWalaList = styled(List)({
    "& .Mui-selected": {
      color: "#70e000",
      "& .MuiListItemIcon-root": {
        color: "#70e000",
      },
    },
  });

  return (
      <Box
        sx={{ display:{xs:"none", sm:'block'} }}
      >
        <Paper
          elevation={5}
          sx={{
            position: "absolute",
            zIndex: -1,
            top: "35px",
            height: "90vh",
            width: "280px",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#70e000",
            borderRadius: "5px",
            margin: "20px 2px",
            backgroundColor: "#6c757d",
            overflowY: "scroll",
          }}
        >
          <StyleWalaList>
            {listItems.map((item) => (
              <ListItemButton
                key={item.text}
                selected={selectedIndex === item.id}
                onClick={(event) => {
                  handleListItemClick1(event, item.id);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontFamily: "Chakra Petch",
                    fontSize: "0.8rem",
                  }}
                />
              </ListItemButton>
            ))}
            {listItems2.map((item) => (
              <>
                <ListItemButton
                  key={item.text}
                  selected={selectedIndex === item.id}
                  onClick={(event) => item.handleListItemClick(event, item.id)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontFamily: "Chakra Petch",
                      fontSize: "0.8rem",
                    }}
                  />
                  {item.open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {item.subTopics.map((topic) => (
                  <Collapse in={item.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4, paddingLeft: 6 }}
                        key={topic}
                      >
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={topic}
                          primaryTypographyProps={{
                            fontFamily: "Chakra Petch",
                            fontSize: "0.8rem",
                          }}
                        />
                      </ListItemButton>
                    </List>
                  </Collapse>
                ))}
              </>
            ))}
          </StyleWalaList>
        </Paper>
      </Box>
  );
};

export default Sidebar;
