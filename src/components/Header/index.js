import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "react-avatar";
import {
  Container,
  LogoBox,
  Nav,
  AvatarBox,
  LeftBox,
  ArrowDropMenu,
} from "./styles";
import UserContext from "../../contexts/UserContext";
import DropDownMenu from "./components/DropDownMenu";

export default function Header({ logOut }) {
  const { user } = useContext(UserContext);
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
        <Avatar name={user.name} size="50px" />
      </AvatarBox>
    </Container>
  );
}
