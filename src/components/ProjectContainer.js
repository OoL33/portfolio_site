import React from "react";
import "/src/assets/stylesheets/projectcontainer.css";
import BubbleTeaDevoteas from "./BubbleTeaDevoteas";
import MTGDecks from "./MTGDecks";

const ProjectContainer = () => {
  return (
    <div id="content">
      <BubbleTeaDevoteas />
      <MTGDecks />
    </div>
  );
};

export default ProjectContainer;
