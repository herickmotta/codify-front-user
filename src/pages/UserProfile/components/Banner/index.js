import React, { useContext } from "react";
import Avatar from "react-avatar";
import UserContext from "../../../../contexts/UserContext";
import { Container, ContainerUser, AvatarBox, UserName } from "./styles";

export default function Banner({ name }) {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <ContainerUser>
        <AvatarBox>
          {user.imageUrl ? (
            <img src={user.imageUrl} alt="avatar" className="avatar" />
          ) : (
            <Avatar name={user.name} size="100%" className="avatar" />
          )}
        </AvatarBox>

        <UserName>{name}</UserName>
      </ContainerUser>
    </Container>
  );
}
