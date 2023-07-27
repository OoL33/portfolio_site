import React from "react";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";

const SideBar = () => {
  return (
    <div id="sidebar">
      <div className="top">
        <p className="about">ABOUT</p>
        <GitHubButton />
        <LinkedInButton />
      </div>
    </div>
  );
};

export default SideBar;
