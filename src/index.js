import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
// import { Router } from "./Router";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router /> */}
    <App />
  </React.StrictMode>
);