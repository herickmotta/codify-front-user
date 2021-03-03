import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import GoogleAnalyticsTracker from "../../hooks/GoogleAnalyticsTracker";

export default function UserProfile() {
  return (
    <Container>
      <Header />

      <GoogleAnalyticsTracker />
    </Container>
  );
}
