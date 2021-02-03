import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./assets/global/ResetCSS";
import GlobalStyle from "./assets/global/GlobalStyle";
import { UserProvider } from "./contexts/UserContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Course from "./pages/Course";
import UserProfile from "./pages/UserProfile";
import Courses from "./pages/Courses";

const App = () => (
  <UserProvider>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/courses/:id" component={Course} />
      </Switch>
    </Router>
  </UserProvider>
);

export default App;
