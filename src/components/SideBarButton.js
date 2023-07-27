import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SideBarButton = () => {
  return (
    <div id="sidebarbutton">
      <FontAwesomeIcon icon={faGithub} />
    </div>
  );
};

export default SideBarButton;
