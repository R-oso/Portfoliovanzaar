import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import projectCSS from "../css/project.module.css";

import projectData from "/assets/projectData.json";
import BasicLayout from "./layouts/BasicLayout";
import PhotoLayout from "./layouts/PhotoLayout";
import VideoLayout from "./layouts/VideoLayout";

const Project = () => {
  const { projectName } = useParams();
  const [currentProjectData, setCurrentProjectData] = useState(null);

  const location = useLocation();
  const { layoutType } = location.state || {};

  useEffect(() => {
    // Find the project data that matches the projectId
    const project = projectData.find((project) => project.name === projectName);

    // Set the project data in state
    setCurrentProjectData(project);
  }, [projectName, projectData]);

  if (!currentProjectData) {
    // You can render a loading state or handle the case when data is not available yet
    return <div>Loading...</div>;
  }

  const { id, title, description, description2, coverImage, info } = currentProjectData;

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
        <h1 className={projectCSS.title}>{title}</h1>
        <div className={projectCSS.info}>{renderParagraphs(infoParagraphs, projectCSS.info)}</div>
        <Link to="/projects">
          <p>back to projects</p>
        </Link>
      </section>

      <section className={projectCSS.section_1}>
        <div className={projectCSS.image_2_container}>
          <img className={projectCSS.image_2} src={`/project_images/${coverImage}`} alt={coverImage} />
        </div>
        <div className={projectCSS.description}>
          <p className={projectCSS.par_1}>{description}</p>
          <p className={projectCSS.par_2}>{description2}</p>
        </div>
      </section>
      {projectContent}
    </section>
  );
};

export default Project;
