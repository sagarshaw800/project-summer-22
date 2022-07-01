import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import LogInPage from "../../Pages/LogInPage/LogInPage";
import DailyProblems from "../../Pages/DailyProblems/DailyProblems";
import CheatSheets from "../../Pages/CheatSheets/CheatSheets";
import DsaSdeSheets from "../../Pages/DsaSdeSheets/DsaSdeSheets";
import LearningResources from "../../Pages/LearningResources/LearningResources";
import DataStructure from "../../Pages/DataStructure/DataStructure";
import Algorithms from "../../Pages/Algorithms/Algorithms";
import DsaSdeSheetsContext from "../../Context/DsaSdeSheetContext";
import PotdDataContext from "../../Context/PotdDataContext";
import LearningResourcesContext from "../../Context/LearningResourcesContext";
import Html from "../../Pages/CheatSheets/Html/Html";
import Css from "../../Pages/CheatSheets/Css/Css";
import Javascript from "../../Pages/CheatSheets/Javascript/Javascript";

const PageHolder = () => {
  return (
    <LearningResourcesContext>
      <PotdDataContext>
        <DsaSdeSheetsContext>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="dailyproblems" element={<DailyProblems />} />
            <Route path="dsasdesheets" element={<DsaSdeSheets />} />
            <Route path="cheatsheets" element={<CheatSheets />} >
              <Route index element={<Html/>}/>
              <Route path="html" element={<Html/>}/>
              <Route path="css" element={<Css/>}/>
              <Route path="javascript" element={<Javascript/>}/>
            </Route>
            <Route path="learningresources" element={<LearningResources />} />
            <Route path="datastructures" element={<DataStructure />}></Route>
            <Route path="algorithms" element={<Algorithms />}></Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </DsaSdeSheetsContext>
      </PotdDataContext>
    </LearningResourcesContext>
  );
};

export default PageHolder;
