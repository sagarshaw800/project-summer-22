import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const sidebarDataContext = React.createContext();
const SidebarDataContext = ({ children }) => {
  const listItems = [
    { id: 0, text: "DAILY PROBLEMS", icon: <TipsAndUpdatesIcon/>},
    { id: 1, text: "DSA SDE SHEETS" , icon: <AutoAwesomeMotionIcon/>},
    { id: 2, text: "CHEAT SHEETS" ,icon: <ReceiptIcon/>},
    { id: 3, text: "LEARNING RESOURCES",icon: <YouTubeIcon/> },
    { id: 4, text: "DSA NOTES",icon: <AutoStoriesIcon/> },
  ];

  return (
    <sidebarDataContext.Provider value={{ listItems: listItems }}>
      {children}
    </sidebarDataContext.Provider>
  );
};

export default SidebarDataContext;
