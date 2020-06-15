import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";
import SettingButtonsComponent from "../components/SettingButtons";
import React from "react";
import "../style/settings.css";

const ChangePasswordChild = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <br />
        <SettingButtonsComponent />
        <hr className="lines" />
        <form id="changePasswordForm">
          <FormComponent
            id="currentPassword"
            value="Nuvarande lösenord"
            type="password"
          />
          <br />
          <br />
          <FormComponent
            id="currentPassword"
            value="Nytt lösenord"
            type="password"
          />
          <FormComponent
            id="currentPassword"
            value="Bekräfta nytt lösenord"
            type="password"
          />
        </form>
        <br />
        <hr className="lines" />
        <div className="saveButton">
          <ButtonComponent title="Spara" className="saveButtons" />
        </div>
      </div>
    </div>
  );
};

const ChangePassword = () => {
  return (
    <div className="page">
      <p className="settingsTag">Inställningar</p>
      <div className="changePasswordCard">
        <CardComponent children={ChangePasswordChild()} />
      </div>
    </div>
  );
};

export default ChangePassword;
