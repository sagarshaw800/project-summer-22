import React, { useState } from "react";

export const indexDataContext = React.createContext();
const IndexDataContext = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <indexDataContext.Provider
      value={{
        selectedIndex: selectedIndex,
        setSelectedIndex: setSelectedIndex,
      }}
    >
      {children}
    </indexDataContext.Provider>
  );
};

export default IndexDataContext;
