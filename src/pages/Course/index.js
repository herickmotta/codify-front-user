import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../contexts/UserContext";
import SignIn from "../SignIn";
import { Container } from "./styles";

export default function Course() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  if (!user) {
    history.push("/");
    return <SignIn />;
  }
  return (
    <Container>
      <Header />
    </Container>
  );
}
