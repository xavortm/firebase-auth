import React from "react";
import { useRecoilState } from "recoil";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { currentProjectSelected } from "../Recoil/Data/Atoms";

import Members from "./Dashboard/Members";
// import Projects from "./Dashboard/Projects";
import Home from "./Dashboard/Home";
import Navigation from "../components/Navigation/Navigation";

export default function Index() {
  const [currentProject] = useRecoilState(currentProjectSelected);

  return (
    <div className="appHome">
      <Router>
        <div className="dashboard">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={`/project/${currentProject.key}/members`}>
              <Members />
            </Route>
            {/* <Route exact path="/projects">
              <Projects />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
