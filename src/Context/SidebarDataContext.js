import React, { useContext, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { indexDataContext } from "./IndexDataContext";

export const sidebarDataContext = React.createContext();
const SidebarDataContext = ({ children }) => {
  const { setSelectedIndex } = useContext(indexDataContext);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleListItemClick1 = (event, index) => {
    setSelectedIndex(index);
    setOpen1(!open1);
  };
  const handleListItemClick2 = (event, index) => {
    setSelectedIndex(index);
    setOpen2(!open2);
  };

  const listItems = [
    { id: 0, text: "HOME", icon: <HomeIcon /> },
    { id: 1, text: "LOG IN", icon: <VpnKeyIcon /> },
    { id: 2, text: "DAILY PROBLEMS", icon: <TipsAndUpdatesIcon /> },
    { id: 3, text: "DSA SDE SHEETS", icon: <AutoAwesomeMotionIcon /> },
    { id: 4, text: "CHEAT SHEETS", icon: <ReceiptIcon /> },
    { id: 5, text: "LEARNING RESOURCES", icon: <YouTubeIcon /> },
  ];
  const listItems2 = [
    {
      id: 6,
      text: "DATA STRUCTURES",
      icon: <AutoStoriesIcon />,
      open: open1,
      handleListItemClick: handleListItemClick1,
      subTopics: [
        "Array",
        "String",
        "Stack",
        "Queue",
        "Linked Lists",
        "Hash Maps",
        "Tree",
        "Graph",
      ],
    },
    {
      id: 7,
      text: "ALGORITHMS",
      icon: <AutoStoriesIcon />,
      open: open2,
      handleListItemClick: handleListItemClick2,
      subTopics: [
        "Searching",
        "Sorting",
        "Greedy",
        "Recursion",
        "Traversal",
        "Dynamic Programming",
        "Backtracking",
      ],
    },
  ];

  return (
    <sidebarDataContext.Provider
      value={{ listItems: listItems, listItems2: listItems2 }}
    >
      {children}
    </sidebarDataContext.Provider>
  );
};

export default SidebarDataContext;
