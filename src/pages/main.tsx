import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import About from "./about/about";
import Home from "./home/home";
import Projects from "./projects/projects";
import Error404 from "./error404/error404";
import AMGM_CIC from "./projects/project/AMGM_CIC/AMGM_CIC";
import PS_OCR from "./projects/project/PS_OCR/PS_OCR";
import CEDT_FP from "./projects/project/CEDT_FP/CEDT_FP";
import Simple_NNW from "./projects/project/Simple_NNW/Simple_NNW";

ReactDOM.createRoot(document.getElementById("main")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="projects/AMGM_CIC" element={<AMGM_CIC />}></Route>
        <Route path="projects/PS_OCR" element={<PS_OCR />}></Route>
        <Route path="projects/CEDT_Final_Project" element={<CEDT_FP />}></Route>
        <Route path="projects/Simple_NNW" element={<Simple_NNW />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
