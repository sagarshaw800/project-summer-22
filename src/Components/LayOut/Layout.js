import React from "react";
import SidebarDataContext from "../../Context/SidebarDataContext";
import Navbar from "../NavBar/Navbar";
import Sidebar from "../SideBar/Sidebar";

const Layout = () => {
  return (
    <>
      <SidebarDataContext>
        <Sidebar />
        <Navbar />
      </SidebarDataContext>
    </>
  );
};

export default Layout;
