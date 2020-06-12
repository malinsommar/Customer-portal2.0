import React from "react";
import "../style/Login.css";
import "../style/buttons.css";
import { NavLink } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import ButtonComponent from "../components/Button";
import FormComponent from "../components/FormComponent";

const LoginForm = () => {
  return (
    <div>
      <form>
        <FormComponent value="Enter your email:" type="username" />
        <FormComponent value="Enter your password:" type="password" />
        <p>If u don't have an account please press "Register"</p>
        <NavLink to="/register" activeClassName="isActive">
          <ButtonComponent title={"Registrera"} className="homePageButtons" />
        </NavLink>
        <NavLink to="/home" activeClassName="isActive">
          <ButtonComponent title={"Login"} className="saveButtons" />
        </NavLink>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="LoginCard">
      <CardComponent children={LoginForm()} />
    </div>
  );
};

export default Login;
