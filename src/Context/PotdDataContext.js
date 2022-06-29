import React, { createContext, useEffect, useState } from "react";

import img0 from "../assets/images/potd/gfg.png"
import img1 from "../assets/images/potd/hackerrank.png"
import img2 from "../assets/images/potd/leetcode1.png"
import { gfgDataFetcher } from "../utils/gfgDataFetcher";
import { leetcodeDataFetcher } from "../utils/leetcodeDataFetcher";

export const potdDataContext = createContext();

const PotdDataContext = ({children}) => {

  const [leetcodeQues, setLeetcodeQues] = useState('');
  const [leetcodeTitle, setLeetcodeTitle]=useState('');

  const [gfgQues, setGfgQues] = useState('');
  const [gfgTitle, setGfgTitle]=useState('');

  useEffect(() => {
    async function fetchData(){
      const leetcode = await leetcodeDataFetcher();
      setLeetcodeQues(leetcode.link)
      setLeetcodeTitle(leetcode.title)

      const gfg=await gfgDataFetcher();
      setGfgQues(gfg.link)
      setGfgTitle(gfg.title)
    }

    fetchData();
  }, [])

  let potdData = [
    {
      id: 0,
      title:"Leetcode - "+leetcodeTitle ,
      link: "https://leetcode.com"+leetcodeQues,
      logo: img2,
    },

    {
      id: 1,
      title: "GeeksforGeeks - " + gfgTitle,
      link: gfgQues,
      logo: img0,
    },

    
    {
      id: 2,
      title: "HackerRank",
      link: "https://www.hackerrank.com/contests/daily-challenge/challenges",
      logo: img1,
    },
  ];

  return (
      <potdDataContext.Provider value={{potdData: potdData}}>
          {children}
      </potdDataContext.Provider>
  );
};

export default PotdDataContext;
