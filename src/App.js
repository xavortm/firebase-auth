import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Index from "./pages/Index";
import PrivateRoute from "./components/Route/PrivateRoute";

const App = () => {
  return (
    <RecoilRoot>
      <div className="appWrapper">
        <main className="appMain">
          <Router>
            <AuthProvider>
              <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Signin} />
                <PrivateRoute path="/">
                  <Index />
                </PrivateRoute>
              </Switch>
            </AuthProvider>
          </Router>
        </main>
      </div>
    </RecoilRoot>
  );
};

export default App;
