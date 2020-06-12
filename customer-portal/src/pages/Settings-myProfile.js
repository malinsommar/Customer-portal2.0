import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/CardComponent";
import SettingButtonsComponent from "../components/SettingButtons";
import React from "react";
import "../style/settings.css";

const MyProfileChild = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <br />
        <SettingButtonsComponent />
        <hr className="lines" />
        <br />
        <br />
        <hr className="lines" />
        <div id="saveButtonMyProfile">
          <ButtonComponent title="Spara" className="saveButtons" />
        </div>
      </div>
    </div>
  );
};

const MyProfile = () => {
  return (
    <div className="page">
      <p className="settingsTag">Inställningar</p>
      <div className="changePasswordCard">
        <CardComponent children={MyProfileChild()} />
      </div>
    </div>
  );
};

export default MyProfile;
