import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectsCSS from "../css/projects.module.css";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

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

    fetchData();
  }, []);

  // Split projectData into two arrays
  const halfIndex = Math.ceil(projectData.length / 2);
  const leftSideData = projectData.slice(0, halfIndex);
  const rightSideData = projectData.slice(halfIndex);

  return (
    <section className={projectsCSS.section}>
      <Leftside leftSideData={leftSideData} />
      <Link to="/">
        <img src="/shapeprojectpage.png" alt="Absolute Positioned Image" className={projectsCSS.return_image} />
      </Link>
      <Rightside rightSideData={rightSideData} />
    </section>
  );
};

export default Projects;
