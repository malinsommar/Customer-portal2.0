import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/CardComponent";
import SettingButtonsComponent from "../components/SettingButtons";
import FormComponent from "../components/FormComponent";
import React from "react";
import "../style/settings.css";
import "../style/MyProfiles-Settings.css";

const MyProfileChild = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <br />
        <SettingButtonsComponent />
        <hr className="lines" />

        <div id="profileimg"></div>

        <input id="file" type="file" hidden></input>
        <label id="fileLabel" for="file">
          <p className="editPen" id="editButton"></p>
        </label>

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

        <hr className="lines" />
        <div className="saveButton">
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
