import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Navigator from "./navigator";

ReactDOM.createRoot(document.getElementById("navbar")!).render(
  <React.StrictMode>
    <Navigator></Navigator>
  </React.StrictMode>
);
