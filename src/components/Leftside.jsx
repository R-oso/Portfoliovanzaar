import React, { Suspense } from "react";
import projectsCSS from "../css/projects.module.css";
import { Link } from "react-router-dom";

const Leftside = ({ leftSideData }) => {
  if (leftSideData && leftSideData.length > 0) {
    return (
      <div className={projectsCSS.side}>
        <div className={projectsCSS.flex_container}>
          {leftSideData.map((project, index) => (
            <Suspense>
              <Link className={projectsCSS.link} key={index} to={`/projects/${project.name}`} state={{ layoutType: project.layoutType }}>
                <div className={projectsCSS.img_container}>
                  <img className={projectsCSS.img} src={`/project_images/${project.link}`} alt={project.title} loading="lazy" />
                </div>
                <p className={projectsCSS.p}>{project.title}</p>
              </Link>
            </Suspense>
          ))}
        </div>
      </div>
    );
  }
};

export default Leftside;
