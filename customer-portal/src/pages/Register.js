import React from "react";
import "../style/Register.css";
import "../style/buttons.css";
import { NavLink } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";
import ButtonComponent from "../components/Button";

const RegisterForm = () => {
  return (
    <div>
      <h1>Register</h1>
      <hr />
      <form className="registerForm">
        <FormComponent id="name" value="Förnamn" type="name" />
        <FormComponent id="lastname" value="Efternamn" type="lastname" />
        <FormComponent
          id="social-security-number"
          value="Personnummer"
          type="social-security-number"
        />
        <FormComponent id="adress" value="Adress" type="adress" />
        <FormComponent id="city" value="Postort" type="city" />
        <FormComponent id="zip-code" value="Postnummer" type="zip-code" />
        <FormComponent
          id="phone-number"
          value="Telefon nummer"
          type="phone-number"
        />
        <FormComponent id="email" value="Email" type="email" />
        <FormComponent id="password" value="Lösenord" type="password" />
        <FormComponent
          id="confirm-password"
          value="Bekräfta lösenord"
          type="password"
        />
        <br />
        <NavLink to="/login" activeClassName="isActive">
          <div id="registerButton">
            <ButtonComponent title="Register" className="homePageButtons" />
          </div>
        </NavLink>
        <p id="textInfoRegistrera">
          Har du redan ett konto?
          <a href="/login" id="registerLogin">
            Logga in
          </a>
        </p>
      </form>
    </div>
  );
};

const Register = () => {
  return (
    <div className="RegisterCard">
      <CardComponent children={RegisterForm()} />
    </div>
  );
};
export default Register;
