import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("navbar")!).render(
  <React.StrictMode>
      <a href="/">Home</a>
      <a href="/src/pages/projects/">Projects</a>
      <a href="/src/pages/about/">About Me</a>
  </React.StrictMode>
);
