import React, { useState } from 'react'
export const openDrawerDataContext = React.createContext();
const OpenDrawerDataContext = ({children}) => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <openDrawerDataContext.Provider
      value={{
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
      }}
    >
      {children}
    </openDrawerDataContext.Provider>
  )
}

export default OpenDrawerDataContext
