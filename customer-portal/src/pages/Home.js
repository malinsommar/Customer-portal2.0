import React from "react";
import { NavLink } from "react-router-dom";
import { Progress } from "reactstrap";
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
          <p id="cardText">
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
        <Progress multi>
          <Progress bar color="success" value="30" />
          <Progress bar color="info" value="25" />
          <Progress bar color="warning" value="20" />
        </Progress>
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

      <div id="profileimg"></div>
      <div id="InfoProfile">
        <p id="name">Magnus Persson</p>
        <p id="infon">Person Nr/Organisations nr</p>
        <p id="nr">780817-6331</p>
      </div>

      <div id="industris">
        <p className="info">Föredragna industrier</p>
        <p className="value1">industri 1</p>
        <p className="value1">industri 2</p>
        <p className="value2">industri 3</p>
        <p className="value2">industri 4</p>
      </div>

      <div id="infoCard">
        <p className="info">Kontaktuppgifter</p>
        <p className="info-profile">Telefon:</p>
        <p className="infoAboutPerson">079 946 3654</p>
        <p className="info-profile">Mail: </p>
        <p className="infoAboutPerson">magnus.persson@hotmail.com</p>
        <p className="info-profile">Addres: </p>
        <p className="infoAboutPerson">Lantmilsgatan 7</p>
        <p className="info-profile">Postnummer: </p>
        <p className="infoAboutPerson">415 01</p>
        <p className="info-profile">Postort: </p>
        <p className="infoAboutPerson">Göteborg</p>
      </div>
    </div>
  );
};

export default Home;
