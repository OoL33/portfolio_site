import React from "react";
import SideBarButton from "./SideBarButton";

const SideBar = () => {
  return (
    <div id="sidebar">
      <div className="top">
        <p>ABOUT</p>
        <SideBarButton />
      </div>
    </div>
  );
};

export default SideBar;
