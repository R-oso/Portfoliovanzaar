import React from "react";

const BasicLayout = () => {
  const { id, title, description, layoutType, images, info } = props.project;
  return <div>{title}</div>;
};

export default BasicLayout;
