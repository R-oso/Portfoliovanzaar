import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PhotoCSS from "./photolayout.module.css";

const PhotoLayout = (props) => {
  const { images, videos, links, carousel, cover, name } = props.project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className={PhotoCSS.section}>
      <div className={PhotoCSS.wrapper}>
        <div className={PhotoCSS.columns}>
          {images.map((image, index) => (
            <Suspense>
              <div key={index} className={`${PhotoCSS.col} ${PhotoCSS[`image_${index + 1}`]}`}>
                <img className={PhotoCSS.image} key={index} src={`/project_images/${image}`} alt={`Image ${index + 1}`} loading="lazy" />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoLayout;
