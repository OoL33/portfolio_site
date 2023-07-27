import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LinkedInButton = () => {
  const handleExternalLink = () => {
    window.location.href = "https://www.linkedin.com/in/alanaolee";
  };
  return (
    <div id="sidebarbutton">
      <div onClick={handleExternalLink}>
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
};

export default LinkedInButton;
