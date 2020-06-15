import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";
import SettingButtonsComponent from "../components/SettingButtons";
import React from "react";
import "../style/settings.css";

const PreferencesChild = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <br />
        <SettingButtonsComponent />
        <hr className="lines" />
        <br />
        <form id="preferencesForm">
          <input type="checkbox"></input>
          <p>Test</p>
        </form>
        <br />
        <hr className="lines" />
        <div id="saveButtonPreferences">
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
