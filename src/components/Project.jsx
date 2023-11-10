import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import projectCSS from "../css/project.module.css";

import BasicLayout from "./layouts/BasicLayout";
import PhotoLayout from "./layouts/PhotoLayout";
import VideoLayout from "./layouts/VideoLayout";

const Project = () => {
  const { projectName } = useParams();
  const [currentProjectData, setCurrentProjectData] = useState(null);

  const location = useLocation();
  const { layoutType } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/ProjectData.json");
        if (response.ok) {
          const projectData = await response.json();
          // Find the project data that matches the projectId
          const project = projectData.find((project) => project.name === projectName);
          // Set the project data in state
          setCurrentProjectData(project);
        } else {
          console.error("Failed to fetch project data.");
        }
      } catch (error) {
        console.error("An error occurred while fetching project data:", error);
      }
    };

    fetchData();
  }, [projectName]);

  if (!currentProjectData) {
    // You can render a loading state or handle the case when data is not available yet
    return <div>Loading...</div>;
  }

  const { id, title, description, description2, coverImage, info, tags } = currentProjectData;

  // Split the info text into paragraphs based on line breaks
  const infoParagraphs = info.split("\n");

  // Function to render paragraphs
  const renderParagraphs = (paragraphs, className) => {
    return paragraphs.map((paragraph, index) => (
      <p key={index} className={className}>
        {paragraph}
      </p>
    ));
  };

  // Based on the layoutType, you can render different layouts here
  let projectContent;
  switch (layoutType) {
    case "video":
      projectContent = <VideoLayout project={currentProjectData} />;
      break;
    case "photo":
      projectContent = <PhotoLayout project={currentProjectData} />;
      break;

    default:
      projectContent = <BasicLayout project={currentProjectData} />;
  }

  return (
    <section className={projectCSS.section}>
      <section className={projectCSS.title_section}>
        <div className={projectCSS.tags}>
          {tags && tags.length > 0 && (
            <ul className={projectCSS.ul}>
              {tags.map((tag, index) => (
                <button className={projectCSS.tag} key={index}>
                  {tag}
                </button>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className={projectCSS.title}>{title}</p>
        </div>

        <div className={projectCSS.description}>
          <p className={projectCSS.par_1}>{description}</p>
          {description2 !== "" && <p className={projectCSS.par_2}>{description2}</p>}
        </div>

        <div>
          <p className={projectCSS.info}>{info}</p>
        </div>

        <Link to="/projects">
          <img className={projectCSS.back} src="/back.png"></img>
        </Link>
      </section>
      <section className={projectCSS.content_section}>{projectContent}</section>
    </section>
  );
};

export default Project;
