import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Members from "./Dashboard/Members";
import Projects from "./Dashboard/Projects";
import Navigation from "../components/Navigation/Navigation";
import PageHeader from "../components/Header/PageHeader";

export default function Signup() {
  return (
    <div className="appHome">
      <Router>
        <div className="dashboard">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <PageHeader title="Welcome">
                <p>
                  It is quite empty at the moment, so, you might have to check
                  later to see some dev updates on this page :)
                </p>
              </PageHeader>
            </Route>
            <Route path="/members">
              <Members />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
