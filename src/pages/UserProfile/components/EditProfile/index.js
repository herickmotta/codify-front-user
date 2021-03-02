import React, { useState } from "react";
import Avatar from "react-avatar";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Colors from "../../../../config/colors";

import {
  Container,
  InputsContainer,
  ButtonContainer,
  PictureContainer,
  ErrorMessage,
  Label,
} from "./styles";

export default function EditProfile({ email, name }) {
  const [completeName, setCompleteName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessagr] = useState("");
  const [editPassowrd, setEditPassword] = useState(false);
  const [passowrd, setPassword] = useState("");
  const [confirmantionPassword, setConfirmantionPassword] = useState("");

  return (
    <Container>
      <InputsContainer>
        <Label>Nome completo</Label>
        <Input
          borderColor={Colors.editProfileGrey}
          Color={Colors.editProfileGrey}
          type="text"
          placeholder="Nome completo"
          value={completeName}
          // onFocus={() => setError(false)}
          onChange={(text) => setCompleteName(text)}
        />
        <Label marginTop="5%">e-mail</Label>
        <Input
          borderColor={Colors.editProfileGrey}
          Color={Colors.editProfileGrey}
          type="email"
          placeholder="e-mail"
          value={userEmail}
          // onFocus={() => setError(false)}
          onChange={(text) => setUserEmail(text)}
        />
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {editPassowrd && (
          <>
            <Label marginTop="5%">Senha</Label>
            <Input
              borderColor={Colors.editProfileGrey}
              Color={Colors.editProfileGrey}
              type="text"
              placeholder="Nome completo"
              value={passowrd}
              // onFocus={() => setError(false)}
              onChange={(text) => setPassword(text)}
            />
            <Label marginTop="5%">Repita senha</Label>
            <Input
              borderColor={Colors.editProfileGrey}
              Color={Colors.editProfileGrey}
              type="password"
              placeholder="repita senha"
              value={confirmantionPassword}
              // onFocus={() => setError(false)}
              onChange={(text) => setConfirmantionPassword(text)}
            />
          </>
        )}
        <ButtonContainer>
          {!editPassowrd && (
            <Button
              width="12rem"
              onClick={() => setEditPassword(true)}
              text="Trocar senha"
              textColor={Colors.blue}
              color={Colors.white}
              marginRight="15px"
              type="submit"
            />
          )}
          <Button
            width="12rem"
            onClick={() => console.log("zape")}
            disabled={loading}
            text="Salvar"
            type="submit"
          />
        </ButtonContainer>
      </InputsContainer>
      <PictureContainer>
        <Avatar name={name} size="100%" />
      </PictureContainer>
    </Container>
  );
}
