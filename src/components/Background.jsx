import React, { useEffect, useState } from "react";
import bgCSS from "../css/background.module.css";

const Background = () => {
  const [images, setImages] = useState([]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const imageElements = document.querySelectorAll(`.${bgCSS.img}`);
    setImages(imageElements);

    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    // Listen for mousemove event to update mouse coordinates
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateImagePosition = () => {
      for (let image of images) {
        const imageRect = image.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;

        const distance = Math.sqrt(Math.pow(mouseX - imageCenterX, 2) + Math.pow(mouseY - imageCenterY, 2));

        if (distance < 120) {
          image.style.animationPlayState = "paused";

          let offsetX = (mouseX - imageCenterX) / 2;
          let offsetY = (mouseY - imageCenterY) / 2;
        } else {
          image.style.transform = `translate(0px, 0px)`;

          const delay = image.getAttribute("data-delay");
          image.style.animationDelay = `${delay}ms`;
          image.style.animationPlayState = "running";
        }
      }

      requestAnimationFrame(updateImagePosition);
    };

    // Start the animation loop when the component mounts
    updateImagePosition();
  }, [images, mouseX, mouseY]);

  return (
    <div className={bgCSS.img_container}>
      <div className={bgCSS.flex_container}>
        <img className={bgCSS.img} data-delay="0" src="/shape1.png" alt="Shape 1 front page" />
        <img className={bgCSS.img} data-delay="500" src="/shape2.png" alt="Shape 2 front page" />
        <img className={bgCSS.img} data-delay="300" src="/shape3.png" alt="Shape 3 front page" />
        <img className={bgCSS.img} data-delay="150" src="/shape4.png" alt="Shape 4 front page" />
      </div>
    </div>
  );
};

export default Background;
