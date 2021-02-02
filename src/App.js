import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./assets/global/ResetCSS";
import Home from "./pages/Home";
import Course from "./pages/Course";
import GlobalStyle from "./assets/global/GlobalStyle";

const App = () => (
  <>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/courses/:id" component={Course} />
      </Switch>
    </Router>
  </>
);

export default App;
