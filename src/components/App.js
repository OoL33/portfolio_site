import React from "react";
import PortfolioContainer from "./PortfolioContainer";
import SideBar from "./SideBar";
import ProjectContainer from "./ProjectContainer";

const App = () => {
  return (
    <PortfolioContainer>
      <SideBar />
      <ProjectContainer />
    </PortfolioContainer>
  );
};

export default App;
