import React from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../components/Button";

const SettingButtonsComponent = () => {
  return (
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
  );
};

export default SettingButtonsComponent;
