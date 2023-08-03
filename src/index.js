import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/stylesheets/styles.css";
import "@fontsource-variable/saira";
import "@fontsource-variable/inconsolata";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
