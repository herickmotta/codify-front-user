import React, { useContext } from "react";

import Banner from "./components/Banner";
import EditProfile from "./components/EditProfile";
import Header from "../../components/Header";
import { Container } from "./styles";
import GoogleAnalyticsTracker from "../../hooks/GoogleAnalyticsTracker";
import UserContext from "../../contexts/UserContext";

export default function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Header />
      <Banner name={user.name} />
      <EditProfile email={user.email} name={user.name} userToken={user.token} />

      <GoogleAnalyticsTracker />
    </Container>
  );
}
