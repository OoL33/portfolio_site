import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "./SideBar";
import ProjectContainer from "./ProjectContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <ProjectContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
