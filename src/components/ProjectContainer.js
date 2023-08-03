import React from "react";
import BubbleTeaDevoteas from "./BubbleTeaDevoteas";
import MTGDecks from "./MTGDecks";
import "/src/assets/stylesheets/projectcontainer.css";

const ProjectContainer = () => {
  return (
    <div id="content">
      <BubbleTeaDevoteas />
      <MTGDecks />
    </div>
  );
};

export default ProjectContainer;
