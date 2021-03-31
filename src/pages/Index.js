import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Members from "./Dashboard/Members";
import Overview from "./Dashboard/Overview";
import Home from "./Dashboard/Home";
import Navigation from "../components/Navigation/Navigation";

export default function Index() {
  return (
    <div className="appHome">
      <Router>
        <div className="dashboard">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path={`/project/:id`}>
              <Overview />
            </Route>
            <Route path={`/project/:id/members`}>
              <Members />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
