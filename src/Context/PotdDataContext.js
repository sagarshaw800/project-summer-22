import React, { createContext, useEffect, useState } from "react";

import img0 from "../assets/images/potd/gfg.png"
import img1 from "../assets/images/potd/hackerrank.png"
import img2 from "../assets/images/potd/leetcode1.png"
import { leetcodeDataFetcher } from "../utils/leetcodeDataFetcher";

export const potdDataContext = createContext();

const PotdDataContext = ({children}) => {

  const [leetcodeQues, setLeetcodeQues] = useState('');
  const [leetcodeTitle, setLeetcodeTitle]=useState('');

  useEffect(() => {
    async function fetchData(){
      const response = await leetcodeDataFetcher();
      console.log(response[0].link)
      setLeetcodeQues(response[0].link)
      setLeetcodeTitle(response[0].title)
    }

    fetchData();
  }, [])

  let potdData = [
    {
      id: 0,
      title: "GeeksForGeeks ",
      link: "https://practice.geeksforgeeks.org/problem-of-the-day/",
      logo: img0,
    },

    {
      id: 1,
      title: "HackerRank",
      link: "https://www.hackerrank.com/contests/daily-challenge/challenges",
      logo: img1,
    },

    {
      id: 2,
      title:"Leetcode - "+leetcodeTitle ,
      link: "https://leetcode.com"+leetcodeQues,
      logo: img2,
    },
  ];

  return (
      <potdDataContext.Provider value={{potdData: potdData}}>
          {children}
      </potdDataContext.Provider>
  );
};

export default PotdDataContext;
