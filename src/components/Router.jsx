import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Component imports
import About from "./About";
import Home from "./Home";
import Test from "./Test";
import Projects from "./Projects";
import Project from "./Project";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectName" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
