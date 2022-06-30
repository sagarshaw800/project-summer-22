import React from "react";
import MinutesEngineering from "../assets/images/learningResources/MinuteEngineering.jpg";
import AbdulBari from "../assets/images/learningResources/AbdulBari.jpg";
import AkshaySaini from "../assets/images/learningResources/AkshaySaini.jpg";
import GateSmashers from "../assets/images/learningResources/GateSmashers.jpg";
import ApnaCollege from "../assets/images/learningResources/ApnaCollege.jpg";
import codeForCause from "../assets/images/learningResources/codeForCause.jpg";
import CodeWithHarry from "../assets/images/learningResources/CodeWithHarry.jpg";
import CSEGurus from "../assets/images/learningResources/CSEGurus.jpg";
import Education4U from "../assets/images/learningResources/Education4U.jpg";
import FreeCodeCamp from "../assets/images/learningResources/FreeCodeCamp.jpg";
import GateAcademy from "../assets/images/learningResources/GateAcademy.jpg";
import HiteshChoudhary from "../assets/images/learningResources/HiteshChoudhary.jpg";
import JennyLecture from "../assets/images/learningResources/JennyLecture.jpg";
import KunalKushwaha from "../assets/images/learningResources/KunalKushwaha.jpg";
import LastMinuteTution from "../assets/images/learningResources/LastMinuteTution.jpg";
import Luv from "../assets/images/learningResources/Luv.jpg";
import mycodeschool from "../assets/images/learningResources/mycodeschool.jpg";
import MysirG from "../assets/images/learningResources/MysirG.jpg";
import NesoAcademy from "../assets/images/learningResources/NesoAcademy.jpg";
import PepCoding from "../assets/images/learningResources/PepCoding.jpg";
import RachitJain from "../assets/images/learningResources/RachitJain.jpg";
import TakeUForward from "../assets/images/learningResources/TakeUForward.jpg";
import Telusko from "../assets/images/learningResources/Telusko.jpg";
import UniversityAcademy from "../assets/images/learningResources/UniversityAcademy.jpg";

export const learningResourcesContext = React.createContext();

const LearningResourcesContext = ({ children }) => {
  const resources1 = [
    {
      id: 0,
      title: "Gate Smashers",
      link: "https://www.youtube.com/c/GateSmashers",
      logo: GateSmashers,
    },
    {
      id: 1,
      title: "Neso Academy",
      link: "https://www.youtube.com/c/nesoacademy",
      logo: NesoAcademy,
    },
    {
      id: 2,
      title: "Gate Academy",
      link: "https://www.youtube.com/channel/UCNGPqc8IajHf8yUnFtFJ4Vg ",
      logo: GateAcademy,
    },
    {
      id: 3,
      title: "Last Minute Tution",
      link: "https://www.youtube.com/c/Lastmomenttuitions ",
      logo: LastMinuteTution,
    },
    {
      id: 4,
      title: "Education 4 U",
      link: "https://www.youtube.com/channel/UCKS34cSMNaXaySe2xgXH-3A ",
      logo: Education4U,
    },
    {
      id: 5,
      title: "5 Minute Engineering",
      link: "https://www.youtube.com/c/5MinutesEngineering ",
      logo: MinutesEngineering,
    },
    {
      id: 6,
      title: "CSE Gurus",
      link: "https://www.youtube.com/c/CSEGURUS",
      logo: CSEGurus,
    },
    {
      id: 7,
      title: "University Academy",
      link: "https://www.youtube.com/c/UniversityAcademy",
      logo: UniversityAcademy,
    },
  ];

  const resources2 = [
    {
      id: 0,
      title: "Take U Forward",
      link: "https://www.youtube.com/c/takeUforward ",
      logo: TakeUForward,
    },
    {
      id: 1,
      title: "Abdul Bari",
      link: "https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw ",
      logo: AbdulBari,
    },
    {
      id: 2,
      title: "PepCoding",
      link: "https://www.youtube.com/c/Pepcoding ",
      logo: PepCoding,
    },
    {
      id: 3,
      title: "My Code School",
      link: "https://www.youtube.com/user/mycodeschool",
      logo: mycodeschool,
    },
    {
      id: 4,
      title: "Luv",
      link: "https://www.youtube.com/c/LuvIsMe ",
      logo: Luv,
    },
    {
      id: 5,
      title: "Apna College",
      link: "https://www.youtube.com/c/ApnaCollegeOfficial/featured ",
      logo: ApnaCollege,
    },
    {
      id: 6,
      title: "Rachit Jain",
      link: "https://www.youtube.com/c/RachitJain ",
      logo: RachitJain,
    },
    {
      id: 7,
      title: "Jenny's Lecture",
      link: "https://www.youtube.com/c/JennyslecturesCSITNETJRF ",
      logo: JennyLecture,
    },
  ];

  const resources3 = [
    {
      id: 0,
      title: "Code For Cause",
      link: "https://www.youtube.com/c/CodeforCause ",
      logo: codeForCause,
    },
    {
      id: 1,
      title: "Akshay Saini",
      link: "https://www.youtube.com/c/akshaymarch7 ",
      logo: AkshaySaini,
    },
    {
      id: 2,
      title: "Hitesh Choudhary",
      link: "https://www.youtube.com/c/HiteshChoudharydotcom ",
      logo: HiteshChoudhary,
    },
    {
      id: 3,
      title: "Telusko",
      link: "https://www.youtube.com/c/Telusko ",
      logo: Telusko,
    },
  ];

  const resources4 = [
    {
      id: 0,
      title: "Code With Harry",
      link: "https://www.youtube.com/c/CodeWithHarry ",
      logo: CodeWithHarry,
    },
    {
      id: 1,
      title: "Kunal Kushwaha",
      link: "https://www.youtube.com/c/KunalKushwaha ",
      logo: KunalKushwaha,
    },
    {
      id: 2,
      title: "MySirG.com",
      link: "https://www.youtube.com/user/saurabhexponent1 ",
      logo: MysirG,
    },
    {
      id: 3,
      title: "Free Code Camp",
      link: "https://www.youtube.com/c/Freecodecamp ",
      logo: FreeCodeCamp,
    },
  ];

  return (
    <learningResourcesContext.Provider
      value={{
        resources1: resources1,
        resources2: resources2,
        resources3: resources3,
        resources4: resources4,
      }}
    >
      {children}
    </learningResourcesContext.Provider>
  );
};

export default LearningResourcesContext;
