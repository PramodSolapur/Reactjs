import React from "react";
import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const SpaceXApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Header handleClick={handleClick} />
      <Sidebar isSidebarOpen={isSidebarOpen} handleClick={handleClick} />
      <Body isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default SpaceXApp;
