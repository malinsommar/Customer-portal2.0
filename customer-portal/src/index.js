import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/Home";
import MyPortfolio from "./pages/MyPortfolio";
import MyProfile from "./pages/Settings-myProfile";
import ChangePassword from "./pages/Settings-changePassword";
import Preferences from "./pages/Settings-preferences";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPageFound from "./pages/NoPageFound";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/myPortfolio" component={MyPortfolio} />
        <Route path="/settings/myProfile" component={MyProfile} />
        <Route path="/settings/changePassword" component={ChangePassword} />
        <Route path="/settings/preferences" component={Preferences} />
        <Route component={NoPageFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

serviceWorker.unregister();
