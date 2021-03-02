import React from "react";
import Avatar from "react-avatar";
import { Container, ContainerUser, AvatarBox, UserName } from "./styles";

export default function Banner({ name }) {
  return (
    <Container>
      <ContainerUser>
        <AvatarBox>
          <Avatar name={name} size="100%" />
        </AvatarBox>

        <UserName>{name}</UserName>
      </ContainerUser>
    </Container>
  );
}
