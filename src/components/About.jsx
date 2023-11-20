import React from "react";
import AboutCSS from "../css/about.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={AboutCSS.section}>
      <div className={AboutCSS.flex_container}>
        <div className={AboutCSS.image_container}>
          <img className={AboutCSS.image} src="/about.jpg"></img>
        </div>
        {/* <Link to="/">
          <img src="/shapeprojectpage.png" alt="Absolute Positioned Image" className={AboutCSS.return_image} />
        </Link> */}
        <div className={AboutCSS.text_container}>
          <p>I love to see and observe what is happening around us. Finding the hidden things in our world and visualizing them to educate, create awareness and inspire. I believe everyone has interesting stories to tell. With my works, I try to showcase these stories. Through sharing stories, visions, skills and concepts new ideas get created.</p>
          <p className={AboutCSS.collab}>If you want to collaborate or have a chat, please contact me &lt;3 </p>
          <div className={AboutCSS.contact_container}>
            <a className={AboutCSS.contact} href="mailto:Zaravkr@outlook.com">
              CONTACT
            </a>
            <a className={AboutCSS.contact} href="https://www.instagram.com/zarakriek/">
              INSTAGRAM
            </a>
            <a className={AboutCSS.contact} href="https://www.linkedin.com/in/zara-van-kriekingen-9428a1210/">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
