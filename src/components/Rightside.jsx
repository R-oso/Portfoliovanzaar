import React from "react";
import projectsCSS from "../css/projects.module.css";

const Rightside = (rightSideData) => {
  return (
    <div className={projectsCSS.side}>
      <div className={projectsCSS.flex_container}>
        <img src="/project_images/Teaparty_cover.png"></img>
        <img src="/project_images/Teaparty_extras.png"></img>
      </div>
    </div>
  );
};

export default Rightside;
