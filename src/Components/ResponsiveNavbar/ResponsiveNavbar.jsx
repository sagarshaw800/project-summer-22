import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useContext } from "react";
import { sidebarDataContext } from "../../Context/SidebarDataContext";
import { indexDataContext } from "../../Context/IndexDataContext";
import { openDrawerDataContext } from "../../Context/OpenDrawerDataContext";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ResponsiveNavbar = () => {
  const handleListItemClick1 = (event, index) => {
    setSelectedIndex(index);
  };

  const { openDrawer, setOpenDrawer } = useContext(openDrawerDataContext);
  const { listItems, listItems2 } = useContext(sidebarDataContext);
  const { selectedIndex, setSelectedIndex } = useContext(indexDataContext);

  const StyleWalaList = styled(List)({
    paddingTop: "50px",
    "& .Mui-selected": {
      color: "#70e000",
      "& .MuiListItemIcon-root": {
        color: "#70e000",
      },
    },
  });

  const navigate = useNavigate();

  return (
    <>
      <Drawer
        variant="permanent"
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
        elevation={5}
        sx={{
          position: "absolute",
          zIndex: -1,
          overflowY: "scroll",
          display: { xs: "none", md: "block" },
          [`& .MuiDrawer-paper`]: { width: "275px", bgcolor: "#6c757d" },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyleWalaList>
          {listItems.map((item) => (
            <ListItemButton
              key={item.text}
              selected={selectedIndex === item.id}
              onClick={(event) => {
                handleListItemClick1(event, item.id);
                setOpenDrawer(!openDrawer);
                navigate(item.text.split(" ").join("").toLowerCase(), {
                  replace: true,
                });
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
                onClick={(event) => {
                  item.handleListItemClick(event, item.id);
                  navigate(item.text.split(" ").join("").toLowerCase(), {
                    replace: true,
                  });
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
                {item.open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {item.subTopics.map((topic) => (
                <Collapse in={item.open} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemButton
                      sx={{ paddingLeft: 6 }}
                      key={topic}
                      onClick={() => {
                        navigate(topic.split(" ").join(""), {
                          replace: true,
                        });
                      }}
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
      </Drawer>
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
        elevation={5}
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          zIndex: -1,
          overflowY: "scroll",
          [`& .MuiDrawer-paper`]: { width: "275px", bgcolor: "#6c757d" },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyleWalaList>
          {listItems.map((item) => (
            <ListItemButton
              key={item.text}
              selected={selectedIndex === item.id}
              onClick={(event) => {
                handleListItemClick1(event, item.id);
                setOpenDrawer(!openDrawer);
                navigate(item.text.split(" ").join("").toLowerCase(), {
                  replace: true,
                });
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
                onClick={(event) => {
                  item.handleListItemClick(event, item.id);
                  navigate(item.text.split(" ").join("").toLowerCase(), {
                    replace: true,
                  });
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
                {item.open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {item.subTopics.map((topic) => (
                <Collapse in={item.open} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemButton
                      sx={{ paddingLeft: 6 }}
                      key={topic}
                      onClick={() => {
                        navigate(topic.split(" ").join(""), {
                          replace: true,
                        });
                      }}
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
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;
