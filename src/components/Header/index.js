import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import {
  Container,
  LogoBox,
  Nav,
  AvatarBox,
  LeftBox,
  ArrowDropMenu,
} from "./styles";

import DropDownMenu from "./components/DropDownMenu";

export default function Header({ logOut }) {
  const history = useHistory();
  const [isMenuDown, setIsMenuDown] = useState(false);
  return (
    <Container isMenuDown={isMenuDown}>
      <LeftBox>
        <LogoBox onClick={() => history.push("/home")}>
          <img src="/images/logo-header.png" alt="codify logo" />
        </LogoBox>

        <Nav>
          <Link to="/home"> Home </Link>
          <Link to="/courses"> Cursos </Link>
          <Link to="/profile"> Perfil </Link>
        </Nav>
      </LeftBox>
      <AvatarBox onClick={() => setIsMenuDown(!isMenuDown)}>
        <ArrowDropMenu isMenuDown={isMenuDown}>
          <IoIosArrowDown />
        </ArrowDropMenu>
        <DropDownMenu isMenuDown={isMenuDown} logOut={logOut} />
        <img
          src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"
          alt=""
        />
      </AvatarBox>
    </Container>
  );
}
