import React from "react";
import "../style/FormComponent.css";

const FormComponent = ({ value, id, type }) => {
  return (
    <div id={id}>
      <p className="text">{value}</p>
      <input className="box" type={type}></input>
    </div>
  );
};
export default FormComponent;
