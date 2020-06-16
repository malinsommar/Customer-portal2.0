import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";
import SettingButtonsComponent from "../components/SettingButtons";
import React from "react";
import "../style/settings.css";

const checkBoxes = [
  "Bygg",
  "Medicin",
  "It",
  "Resturang",
  "Transport",
  "Leksaker",
  "Mode",
  "Allt",
];

const PreferencesChild = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <br />
        <SettingButtonsComponent />
        <hr className="lines" />
        <br />
        <p id="prefText">Mina prefererade industrier att investera inom.</p>
        <form>
          <div id="formDiv">
            <div id="leftBoxes">
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">Bygg</label>
              <span className="checkBox"></span>
              <br />
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">Medicin</label>
              <br />
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">It</label>
              <br />
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">Resturang</label>
            </div>
            <div id="rightBoxes">
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">Transport</label>
              <br />
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">Leksaker</label>
              <br />
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">Mode</label>
              <br />
              <input type="checkbox" id="myCheck" />
              <label className="checkboxText">Allt</label>
            </div>
          </div>
        </form>
        <div id="bankDiv">
          <p id="bankInfo">
            Tips! Ifall du väljer att inegrera din bank så kan vi anpassa dina
            <br />
            investeringar utefter din ekonomi och prefereser.
          </p>
          <a href="bank.se" id="linkToBank">
            Integrera min bank
          </a>
          <p id="linkText">(Detta kommer skicka dig vidare till din bank.)</p>
        </div>
        <br />
        <hr className="lines" />
        <div className="saveButton">
          <ButtonComponent title="Spara" className="saveButtons" />
        </div>
      </div>
    </div>
  );
};

const Preferences = () => {
  return (
    <div className="page">
      <p className="settingsTag">Inställningar</p>
      <div className="changePasswordCard">
        <CardComponent children={PreferencesChild()} />
      </div>
    </div>
  );
};

export default Preferences;
