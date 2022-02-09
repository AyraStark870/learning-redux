import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRoutes } from "./AuthRoutes";

export const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRoutes} />
          <Route path="/" exact component={JournalScreen} />
          <Redirect to="auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
