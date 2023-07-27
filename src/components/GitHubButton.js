import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GitHubButton = () => {
  const handleExternalLink = () => {
    window.location.href = "https://github.com/OoL33";
  };
  return (
    <div id="sidebarbutton">
      <div onClick={handleExternalLink}>
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
};

export default GitHubButton;
