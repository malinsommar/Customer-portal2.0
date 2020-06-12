import React, { Component } from "react";
import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
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
      </div>
    </div>
  );
};

export default Home;
