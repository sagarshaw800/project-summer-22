import React, { useContext } from "react";
import { indexDataContext } from "../../Context/IndexDataContext";
import CheatSheets from "../../Pages/CheatSheets/CheatSheets";
import LearningResources from "../../Pages/LearningResources/LearningResources";
import DsaSdeSheets from "../../Pages/DsaSdeSheets/DsaSdeSheets";
import DailyProblems from "../../Pages/DailyProblems/DailyProblems";
import Home from "../../Pages/Home/Home";
import LogInPage from "../../Pages/LogInPage/LogInPage";
import Algorithms from "../../Pages/Algorithms/Algorithms";
import DataStructure from "../../Pages/DataStructure/DataStructure";
const PageSelector = () => {
  const { selectedIndex } = useContext(indexDataContext);

  const pages = [
    <Home/>,
    <LogInPage/>,
    <DailyProblems />,
    <DsaSdeSheets />,
    <CheatSheets />,
    <LearningResources />,
    <DataStructure/>,
    <Algorithms/>,
  ];
  return <>{pages[selectedIndex]}</>;
};

export default PageSelector;
