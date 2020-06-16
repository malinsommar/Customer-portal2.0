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
        <FormComponent id="user" value="Enter your email:" type="username" />
        <FormComponent
          id="passwordLogin"
          value="Enter your password:"
          type="password"
        />
        <p id="textInfo">
          Saknar du ett konto?
          <a href="/register"> Skapa konto</a>
        </p>
        <NavLink to="/home" activeClassName="isActive">
          <div id="loginButton">
            <ButtonComponent title={"Login"} className="saveButtons" />
          </div>
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
