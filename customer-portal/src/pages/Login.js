import React from "react";
import "../style/Login.css";
import "../style/buttons.css";
import { NavLink } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import ButtonComponent from "../components/Button";

const LoginForm = () => {
  return (
    <div>
      <form>
        <p>Enter your email:</p>
        <input type="username"></input>
        <p>Enter your password:</p>
        <input type="password"></input>
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
