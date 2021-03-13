import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import PrivateRoute from "./components/Route/PrivateRoute";

const App = () => {
  return (
    <div className="appWrapper">
      <header className="appHeader">
        <span>Auth learning project</span>
      </header>
      <main className="appMain">
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Signin} />
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>
            </Switch>
          </AuthProvider>
        </Router>
      </main>
    </div>
  );
};

export default App;
