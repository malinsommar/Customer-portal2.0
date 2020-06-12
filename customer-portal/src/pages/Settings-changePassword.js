import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import CardComponent from "../components/CardComponent";
import React from "react";
import { NavLink } from "react-router-dom";
import "../style/settings.css";

const ChangePasswordChild = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <br />
        <div className="buttons">
          <NavLink to="/settings/myProfile" activeClassName="isActive">
            <ButtonComponent title="Min Profil" className="settingButtons" />
          </NavLink>
          <NavLink to="/settings/changePassword" activeClassName="isActive">
            <ButtonComponent title="Byt lösenord" className="settingButtons" />
          </NavLink>
          <NavLink to="/settings/preferences" activeClassName="isActive">
            <ButtonComponent title="Preferenser" className="settingButtons" />
          </NavLink>
        </div>
        <hr className="lines" />
        <form>
          <p>Nuvarande lösenord:</p>
          <input type="currentPassword"></input>
          <p>Nytt lösenord:</p>
          <input type="newPassword"></input>
          <p>Bekräfta nytt lösenord:</p>
          <input type="newPasswordAgain"></input>
        </form>
        <hr className="lines" />
        <div id="saveButtonChangePassword">
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
