import React from "react";
import Signup from "../pages/Signup";
import { AuthProvider } from "../contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
};

export default App;
