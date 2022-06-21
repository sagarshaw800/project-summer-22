import {  Drawer, List, ListItem, ListItemText} from '@mui/material'
import React, { useContext } from 'react'
import { sidebarDataContext } from '../../Context/SidebarDataContext'

const Sidebar = () => {
  const {listItems} = useContext(sidebarDataContext)
  // const [Open, setOpen] = useState(true)
  console.log(listItems)
  return (
    <>
      <Drawer 
        anchor='left' 
        open={true} >
        <List>
          {listItems.map((item)=>(
            <ListItem key={item}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Sidebar