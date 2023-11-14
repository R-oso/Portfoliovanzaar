import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VideoCSS from "./videolayout.module.css";
import Carousel from "./Carousel";

const VideoLayout = (props) => {
  const { images, videos, links, carousel, cover, name } = props.project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className={VideoCSS.section}>
      <div className={VideoCSS.wrapper}>
        <div className={VideoCSS.columns}>
          <div className={`${VideoCSS.col} ${VideoCSS.video}`}>
            <iframe className={VideoCSS.iframe} src={videos[0]} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title={`Video ${name}`}></iframe>
          </div>

          {carousel !== "" ? (
            <Carousel images={carousel} />
          ) : (
            // Render the GIF component if 'carousel' is empty
            <div className={`${VideoCSS.col} ${VideoCSS.gif_container}`}>
              <video className={VideoCSS.gif} autoPlay muted preload="auto" loop>
                <source src={`/project_videos/${videos[1]}`} />
              </video>
            </div>
          )}

          {cover !== "" && (
            <div className={`${VideoCSS.col} ${VideoCSS.cover}`}>
              <img className={`${VideoCSS.image}`} src={`/project_images/${cover}`} alt={cover} />{" "}
            </div>
          )}

          {images &&
            images.length > 0 &&
            images.map((image, index) => (
              <div className={`${VideoCSS.col} ${VideoCSS[`image_${index + 1}`]}`}>
                <img className={`${VideoCSS.image} ${VideoCSS[`img_${index + 1}`]}`} key={index} src={`/project_images/${image}`} alt={`Image ${index}`} />{" "}
              </div>
            ))}
        </div>
      </div>

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
