import React from "react";
import projectsCSS from "../css/projects.module.css";
import { Link } from "react-router-dom";

const Leftside = ({ leftSideData }) => {
  if (leftSideData && leftSideData.length > 0) {
    return (
      <div className={projectsCSS.side}>
        <div className={projectsCSS.flex_container}>
          {leftSideData.map((project, index) => (
            <Link key={index} to={`/projects/${project.name}`} state={{ layoutType: project.layoutType }}>
              <div className={projectsCSS.img_container}>
                <img className={projectsCSS.img} src={`/project_images/${project.link}`} alt={project.title} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // You can provide a fallback UI or handle the case where data is not available
  return <div>No data available</div>;
};

export default Leftside;
