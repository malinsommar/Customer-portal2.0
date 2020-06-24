import React from "react";
import "../style/Login.css";
import "../style/buttons.css";
import icon from "../images/icon.png";
import { NavLink } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import ButtonComponent from "../components/Button";
import FormComponent from "../components/FormComponent";

const LoginForm = () => {
  return (
    <div>
      <form>
        <FormComponent id="user" value="Enter your email:" type="username" />
        <br></br>
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
          <br></br>
        </NavLink>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="LoginCard">
      <img id="icon" src={icon} alt="icon"></img>
      <CardComponent children={LoginForm()} />
    </div>
  );
};

export default Login;
