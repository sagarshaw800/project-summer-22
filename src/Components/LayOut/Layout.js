import React from "react";
import SidebarDataContext from "../../Context/SidebarDataContext";
import Navbar from "../NavBar/Navbar";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
// import Sidebar from "../SideBar/Sidebar";

const Layout = () => {
  return (
    <>
      <SidebarDataContext>
        {/* <Sidebar /> */}
        <Navbar />
        <ResponsiveNavbar />
      </SidebarDataContext>
    </>
  );
};

export default Layout;
