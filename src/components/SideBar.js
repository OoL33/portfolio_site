import React from "react";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";

const SideBar = () => {
  return (
    <div id="sidebar">
      <div className="top">
        <div className="about">
          <h3>I'm Alana Lee, a full-stack developer.</h3>
            <p>My experience is mainly in Ruby on Rails, React, and Postgresql, but I've written some smaller scripts in Python as well.</p>
        <GitHubButton />
        <LinkedInButton />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
