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
          <p>I love to see and observe what is happening around us. Finding the hidden things in our world and visualizing it to educate, create awareness and inspire. I believe everyone has interesting stories to tell, with my works I try to tell these story’s. Through sharing stories, visions and skills and new concepts ideas get created.</p>
          <p>If you want to collaborate or have a chat please contact me.</p>
          <div className={AboutCSS.contact_container}>
            <p>ZARAVKR@OUTLOOK.COM</p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
