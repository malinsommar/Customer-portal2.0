import React from "react";
import "../style/Register.css";
import { NavLink } from "react-router-dom";
import CardComponent from "../components/CardComponent";

const RegisterForm = () => {
  return (
    <div>
      <h1>Register</h1>
      <hr />
      <form className="registerForm">
        <p id="förnamnText">Förnamn</p>
        <input id="förnamnBox" type="name"></input>
        <p id="efternamnText">Efternamn</p>
        <input id="efternamnBox" type="lastname"></input>
        <p id="personnummerText">Personnummer</p>
        <input id="personnummerBox" type="social-security-number"></input>
        <p id="adressText">Adress</p>
        <input id="adressBox" type="adress"></input>
        <p id="postortText">Postort</p>
        <input id="postortBox" type="city"></input>
        <p id="postnummerText">Postnummer</p>
        <input id="postnummerBox" type="zip-code"></input>
        <p id="telefonnummerText">Telefonnummer</p>
        <input id="telefonnummerBox" type="Phone-number"></input>
        <p id="emailText">Email</p>
        <input id="emailBox" type="email"></input>
        <br />
        <NavLink to="/login" activeClassName="isActive">
          <button>Register</button>
        </NavLink>
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
