import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./assets/global/ResetCSS";
import HomeExample from "./pages/HomeExample";
import GlobalStyle from "./assets/global/GlobalStyle";

const App = () => (
  <>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomeExample} />
      </Switch>
    </Router>
  </>
);

export default App;
