import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./assets/global/ResetCSS";
import GlobalStyle from "./assets/global/GlobalStyle";
import { UserProvider } from "./contexts/UserContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => (
  <UserProvider>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  </UserProvider>
);

export default App;
