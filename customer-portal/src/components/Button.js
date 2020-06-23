import React from "react";

const ButtonComponent = ({ title, isClicked, className, id }) => {
  return (
    <button className={className} onClick={isClicked} id={id}>
      {title}
    </button>
  );
};

export default ButtonComponent;
