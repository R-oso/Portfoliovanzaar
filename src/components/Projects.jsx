import React from "react";
import { Link } from "react-router-dom";
import projectData from "/assets/projectData.json";
import projectsCSS from "../css/projects.module.css";

const Projects = () => {
  return (
    <section className={projectsCSS.section}>
      <h1>PROJECTS FAM</h1>
      <Link to="/">
        <p>go back joe </p>
      </Link>

      <ul>
        {projectData.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.name}`} state={{ layoutType: project.layoutType }}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
