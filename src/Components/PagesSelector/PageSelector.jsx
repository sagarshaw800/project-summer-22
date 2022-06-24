import React, { useContext } from "react";
import { indexDataContext } from "../../Context/IndexDataContext";
import DsaNotes from "../../Pages/DsaNotes/DsaNotes";
import CheatSheets from "../../Pages/CheatSheets/CheatSheets";
import LearningResources from "../../Pages/LearningResources/LearningResources";
import DsaSdeSheets from "../../Pages/DsaSdeSheets/DsaSdeSheets";
import DailyProblems from "../../Pages/DailyProblems/DailyProblems";
const PageSelector = () => {
  const { selectedIndex } = useContext(indexDataContext);

  const pages = [
    <DailyProblems />,
    <DsaSdeSheets />,
    <CheatSheets />,
    <LearningResources />,
    <DsaNotes />,
  ];
  return <>{pages[selectedIndex]}</>;
};

export default PageSelector;
