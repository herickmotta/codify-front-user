import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./assets/global/ResetCSS";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./assets/global/GlobalStyle";

const App = () => (
  <>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  </>
);

export default App;
