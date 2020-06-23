import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/CardComponent";
import "../style/home.css";
import "../style/buttons.css";

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <div id="homePage">
        <p id="homeTag">Hem</p>
        <div id="card">
          <p>
            Välkommen <strong>"Namn"!</strong> Ditt innehav blev uppdaterad
            <strong> "Datum".</strong> Ta gärna en titt!
          </p>
        </div>
        <div id="MyProfileHome">
          <CardComponent children={MyProfileHome()} />
        </div>
        <div id="MyPortfolioHome">
          <CardComponent children={myPortfolioChild()} />
        </div>
      </div>
    </div>
  );
};

const myPortfolioChild = () => {
  return (
    <div>
      <p id="myProfile">Mitt Innehav</p>
      <NavLink
        className="navLink"
        to="/settings/myProfile"
        activeClassName="isActive"
      >
        <div id="portfolioButton">
          <ButtonComponent title="Min Portfölj" className="homePageButtons" />
        </div>
      </NavLink>
      <hr id="portfolioLine"></hr>
      <br></br>
      <div id="numberHolder">
        <p id="number">294,045 SEK</p>
        <p id="updated">Uppdaterar 2020-06-23</p>
      </div>
      <div id="container">
        <div id="color1"></div>
        <div id="color2"></div>
        <div id="color3"></div>
      </div>

      <div id="box1">
        <div id="colorM"></div>
        <p className="företag1">Medicin</p>
        <p className="info1">Företag 1, Företag 2 +4</p>
        <p className="sek1">20 456</p>
        <p className="amount">SEK</p>
      </div>
      <div id="box2">
        <div id="colorMode"></div>
        <p className="företag1">Mode</p>
        <p className="info1">Företag 1, Företag 2 +4</p>
        <p className="sek1">20 456</p>
        <p className="amount">SEK</p>
      </div>
      <div id="box3">
        <div id="colorLeksaker"></div>
        <p className="företag1">Leksaker</p>
        <p className="info1">Företag 1, Företag 2 +4</p>
        <p className="sek1">20 456</p>
        <p className="amount">SEK</p>
      </div>
    </div>
  );
};

const MyProfileHome = () => {
  return (
    <div>
      <p id="myProfile">Min Profil</p>
      <NavLink
        className="navLink"
        to="/settings/myProfile"
        activeClassName="isActive"
      >
        <div id="profilePageButton">
          <ButtonComponent title="Redigera" className="homePageButtons" />
        </div>
      </NavLink>
      <hr id="profile"></hr>

      <p>Bild</p>
      <div>
        <p>Namn hämtas från databasen</p>
        <p className="info">Person Nr/Organisations nr</p>
        <p>Personnummer från databasen</p>
      </div>

      <p className="info">Föredragna industrier</p>

      <p className="info">Kontaktuppgifter</p>
      <div>
        <p className="info-profile">Telefon: {"phonenumber"}</p>
        <p className="info-profile">Mail: {"email"}</p>
        <p className="info-profile">Addres: {"adress"}</p>
        <p className="info-profile">Postnummer: {"zip-code"}</p>
        <p className="info-profile">Postort: {"city"}</p>
      </div>
    </div>
  );
};

export default Home;
