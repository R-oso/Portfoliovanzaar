import React, { useState, useEffect } from "react";
import VideoCSS from "./videolayout.module.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className={VideoCSS.carousel}>
      <img className={VideoCSS.carouselImage} src={`/project_images/${images[currentImageIndex]}`} alt={`Carousel Image ${currentImageIndex}`} />
    </div>
  );
};

export default Carousel;
