import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import ResetCSS from "./assets/global/ResetCSS";
import GlobalStyle from "./assets/global/GlobalStyle";
import { UserProvider } from "./contexts/UserContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Course from "./pages/Course";
import UserProfile from "./pages/UserProfile";
import StudyArea from "./pages/StudyArea";
import RecoverPassword from "./pages/RecoverPassword";
import RedefinePassword from "./pages/RedefinePassword";
import { GA_TRACKING_ID } from "./config/constants";

const App = () => {
  ReactGA.initialize(GA_TRACKING_ID);

  return (
    <UserProvider>
      <Router>
        <ResetCSS />
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/courses/:id/chapters/:chapterId/topics/:topicId"
            component={StudyArea}
          />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/courses/:id" component={Course} />
          <Route exact path="/recover-password" component={RecoverPassword} />
          <Route
            exact
            path="/redefine-password/:id/:token"
            component={RedefinePassword}
          />
        </Switch>
      </Router>
    </UserProvider>
  );
};
export default App;
