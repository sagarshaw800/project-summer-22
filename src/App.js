import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Sidebar from './Components/SideBar/Sidebar';
import SidebarDataContext from './Context/SidebarDataContext';


function App() {
  return (
    <>
      <SidebarDataContext>
        {/* <Sidebar/> */}
        <Navbar/>
      </SidebarDataContext>
    </>
  );
}

export default App;
