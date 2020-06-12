import HeaderComponent from "../components/Header";
import ButtonComponent from "../components/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import "../style/settings.css";

const Preferences = () => {
  return (
    <div>
      <HeaderComponent />
      <div id="page">Preferences</div>
      <div className="page">
        My profile
        <br />
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
    </div>
  );
};

export default Preferences;
