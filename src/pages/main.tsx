import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Projects from "./projects/projects";
import Error404 from "./error404/error404";

ReactDOM.createRoot(document.getElementById("main")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
