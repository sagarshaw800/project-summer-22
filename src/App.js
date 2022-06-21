import './App.css';
import Sidebar from './Components/SideBar/Sidebar';
import SidebarDataContext from './Context/SidebarDataContext';

function App() {
  return (
    <>
      <SidebarDataContext>
        <Sidebar/>
      </SidebarDataContext>
    </>
  );
}

export default App;
