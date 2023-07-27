import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Post from "./Post";
import SideBarButton from "./GitHubButton";

const App = () => {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <Post />
      </div>
    </BrowserRouter>
  );
};

export default App;
