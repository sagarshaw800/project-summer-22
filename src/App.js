import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/LayOut/Layout";
import IndexDataContext from "./Context/IndexDataContext";
import OpenDrawerDataContext from "./Context/OpenDrawerDataContext";
import Algorithms from "./Pages/Algorithms/Algorithms";
import CheatSheets from "./Pages/CheatSheets/CheatSheets";
import DailyProblems from "./Pages/DailyProblems/DailyProblems";
import DataStructure from "./Pages/DataStructure/DataStructure";
import DsaSdeSheets from "./Pages/DsaSdeSheets/DsaSdeSheets";
import Home from "./Pages/Home/Home";
import LearningResources from "./Pages/LearningResources/LearningResources";
import LogInPage from "./Pages/LogInPage/LogInPage";
import Array from "./Pages/DataStructure/Array/Array";
import String from "./Pages/DataStructure/String/String";
function App() {
  return (
    <>
      <OpenDrawerDataContext>
        <IndexDataContext>
          <Layout />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="dailyproblems" element={<DailyProblems />} />
            <Route path="dsasdesheets" element={<DsaSdeSheets />} />
            <Route path="cheatsheets" element={<CheatSheets />} />
            <Route path="learningresources" element={<LearningResources />} />
            <Route path="datastructures" element={<DataStructure />}>
              <Route path="array" element={<Array />} />
              <Route path="string" element={<String />} />
            </Route>
            <Route path="algorithms" element={<Algorithms />}></Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </IndexDataContext>
      </OpenDrawerDataContext>
    </>
  );
}

export default App;
