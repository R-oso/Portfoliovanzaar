import React from "react";

const PhotoLayout = () => {
  const { id, title, description, layoutType, images, info } = props.project;
  return <div>{title}</div>;
};

export default PhotoLayout;
