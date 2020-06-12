import React from "react";

const ButtonComponent = ({ title, isClicked, className }) => {
  return (
    <button className={className} onClick={isClicked}>
      {title}
    </button>
  );
};

export default ButtonComponent;
