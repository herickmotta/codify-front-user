import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, LogoBox, Nav, AvatarBox, LeftBox } from "./styles";

export default function Header() {

  const history = useHistory();

  return (
    <Container>
      <LeftBox>
        <LogoBox
          onClick = { () => history.push('/home')}
        >
          <img src="/images/logo-header.png" alt="codify logo" />
        </LogoBox>

        <Nav>
          <Link to="/home"> Home </Link>
          <Link to="/courses"> Cursos </Link>
          <Link to="/profile"> Perfil </Link>
        </Nav>
      </LeftBox>

      <AvatarBox>
        <img src="https://avatars.githubusercontent.com/u/4390631" alt=""/>
      </AvatarBox>
    </Container>
  );
}
