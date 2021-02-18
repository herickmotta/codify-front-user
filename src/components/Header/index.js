import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

import {
  Container,
  LogoBox,
  Nav,
  AvatarBox,
  LeftBox,
  LogOutButton,
} from "./styles";
import Spinner from "../Spinner";
import Colors from "../../config/colors";

export default function Header({ logOut, loading }) {
  const history = useHistory();
  return (
    <Container>
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

      <LogOutButton>
        {loading ? (
          <Spinner color={Colors.blue} />
        ) : (
          <AiOutlineLogin
            color={Colors.blue}
            fontSize="1.5rem"
            cursor="pointer"
            onClick={logOut}
          />
        )}
      </LogOutButton>
      <AvatarBox>
        <img
          src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"
          alt=""
        />
      </AvatarBox>
    </Container>
  );
}
