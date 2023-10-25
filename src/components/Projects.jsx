import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectsCSS from "../css/projects.module.css";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/ProjectData.json");
        if (response.ok) {
          const data = await response.json();
          setProjectData(data); // Update the state with fetched data
        } else {
          console.error("Failed to fetch project data.");
        }
      } catch (error) {
        console.error("An error occurred while fetching project data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);
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
