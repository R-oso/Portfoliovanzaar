import React, { useState } from "react";
import { Link } from "react-router-dom";

import VideoCSS from "./videolayout.module.css";

const VideoLayout = (props) => {
  const { images, videos, links, carousel } = props.project;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <section className={VideoCSS.section_2}>
        <video className={VideoCSS.image} controls>
          <source src={`/project_videos/${videos[0]}`} />
        </video>
      </section>

      <section className={VideoCSS.section_3}>
        {carousel !== "" ? (
          <div />
        ) : (
          // Render the GIF component if 'carousel' is empty
          <video className={VideoCSS.gif} autoPlay muted preload="auto" loop>
            <source src={`/project_videos/${videos[1]}`} />
          </video>
        )}
      </section>

      <section className={VideoCSS.section_4}>
        {images.map((image, index) => (
          <img className={VideoCSS.images} key={index} src={`/project_images/${image}`} alt={`Image ${index}`} />
        ))}
      </section>

      <section className={VideoCSS.section_5}>
        <a href="https://on.soundcloud.com/uVtGr" className={VideoCSS.links}>
          {links}
        </a>
      </section>
    </div>
  );
};

export default VideoLayout;
