import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles.css";
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
