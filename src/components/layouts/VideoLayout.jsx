import React, { useState } from "react";
import { Link } from "react-router-dom";

import VideoCSS from "./videolayout.module.css";

const VideoLayout = (props) => {
  const { images, videos, links, carousel, cover } = props.project;
  const [imageLoaded, setImageLoaded] = useState(false);

  console.log(videos[0]);

  return (
    <section className={VideoCSS.section}>
      <section className={VideoCSS.section_2}>
        <iframe className={VideoCSS.video} src={videos[0]} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Teaparty_musicvideo"></iframe>
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

        <div>
          <img className={VideoCSS.cover} src={`/project_images/${cover}`} alt={cover} />
        </div>
      </section>

      {/* <section className={VideoCSS.section_4}>
        {images.map((image, index) => (
          <img className={VideoCSS.images} key={index} src={`/project_images/${image}`} alt={`Image ${index}`} />
        ))}
      </section>

      <section className={VideoCSS.section_5}>
        <a href="https://on.soundcloud.com/uVtGr" className={VideoCSS.links}>
          {links}
        </a>
      </section> */}
    </section>
  );
};

export default VideoLayout;
