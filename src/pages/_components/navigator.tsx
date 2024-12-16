import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("navbar")!).render(
  <React.StrictMode>
    <nav>
      <a href="#/">Home</a>
      <a href="#/projects">Projects</a>
      <a href="#/achievement">Achievement</a>
      <a href="#/about">About Me</a>
    </nav>
  </React.StrictMode>
);
