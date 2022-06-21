import React from 'react'

export const sidebarDataContext = React.createContext();
const SidebarDataContext = ({children}) => {

    const listItems = ['DSA Notes', 'DSA sde sheets', 'Cheat Sheets', 'Daily Problems', 'Learning Resourcs']

  return (

    <sidebarDataContext.Provider value={{listItems: listItems}}>
        {children}
    </sidebarDataContext.Provider>
  )
}

export default SidebarDataContext