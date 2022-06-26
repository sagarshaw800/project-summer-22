import React, { createContext } from "react";

import img0 from "../assets/images/sdeSheet/striver.jpeg";
import img1 from "../assets/images/sdeSheet/shradhakhapra.jpg";
import img2 from "../assets/images/sdeSheet/loveBabbar.jpg";
import img3 from "../assets/images/sdeSheet/fraz.jpeg";
import img4 from "../assets/images/sdeSheet/siddharth.jpg";
import img5 from "../assets/images/sdeSheet/arsh.jpeg";

export const dsaSdeSheetContext = createContext();
const DsaSdeSheetContext = ({ children }) => {
  const DsaSdeSheetData = [
    {
      id: 0,
      name: "Striver",
      pic: img0,
      link: "https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view",
    },

    {
      id: 1,
      name: "Apni Kaksha",
      pic: img1,
      link: "https://docs.google.com/spreadsheets/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag/edit#gid=0",
    },

    {
      id: 2,
      name: "Love Babbar",
      pic: img2,
      link: "https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view",
    },

    {
      id: 3,
      name: "Fraz",
      pic: img3,
      link: "https://docs.google.com/spreadsheets/d/1-wKcV99KtO91dXdPkwmXGTdtyxAfk1mbPXQg81R9sFE/edit#gid=0",
    },

    {
      id: 4,
      name: "Siddharth Singh",
      pic: img4,
      link: "https://docs.google.com/spreadsheets/d/11tevcTIBQsIvRKIZLbSzCeN4mCO6wD4O5meyrAIfSXw/edit#gid=136755630",
    },

    {
      id: 5,
      name: "Arsh Goyal",
      pic: img5,
      link: "https://docs.google.com/spreadsheets/d/1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE/edit#gid=0",
    },
  ];

  return (
    <dsaSdeSheetContext.Provider value={{ DsaSdeSheetData: DsaSdeSheetData }}>
      {children}
    </dsaSdeSheetContext.Provider>
  );
};

export default DsaSdeSheetContext;
