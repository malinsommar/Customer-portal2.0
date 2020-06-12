import React from "react";

const FormComponent = ({ value, id, type }) => {
  return (
    <div>
      <p id={id}>{value}</p>
      <input type={type}></input>
    </div>
  );
};
export default FormComponent;
