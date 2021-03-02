import React, { useContext, useState } from "react";
import Avatar from "react-avatar";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Colors from "../../../../config/colors";
import UserContext from "../../../../contexts/UserContext";
import UserService from "../../../../services/UserService";

import {
  Container,
  InputsContainer,
  ButtonContainer,
  PictureContainer,
  ErrorMessage,
  Label,
} from "./styles";

export default function EditProfile({ email, name, userToken }) {
  const { user, setUser } = useContext(UserContext);
  const [completeName, setCompleteName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [editPassowrd, setEditPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  async function editProfile(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    let body = {};
    if (password !== "" && password === passwordConfirmation) {
      body = {
        name: completeName,
        email: userEmail,
        password,
        passwordConfirmation,
      };
    } else if (completeName !== name || userEmail !== email) {
      body = {
        name: completeName,
        email: userEmail,
      };
    } else if (password !== passwordConfirmation) {
      setErrorMessage("As senhas não batem");
      setError(true);
      setLoading(false);
    } else {
      setErrorMessage("Sem alteração de dados");
      setError(true);
      setLoading(false);
    }
    if (Object.keys(body).length !== 0) {
      const data = await UserService.editProfile(body, userToken);
      if (data.success) {
        setUser({
          id: user.id,
          email: data.success.email,
          name: data.success.name,
          token: user.token,
        });
      } else if (
        data.response.data.error ===
        '"name" length must be at least 3 characters long'
      ) {
        setErrorMessage("Nome dever ter no mínimo 3 caracteres");
        setError(true);
      } else if (data.response.data.error === '"email" must be a valid email') {
        setErrorMessage("E-mail deve ser um e-mail válido");
        setError(true);
      } else if (
        data.response.data.error ===
        '"password" length must be at least 8 characters long'
      ) {
        setErrorMessage("Senha deve ter no mínimo 8 caracteres");
        setError(true);
      } else {
        setErrorMessage("Erro no servidor, tente novamente mais tarde.");
        setError(true);
      }

      setLoading(false);
    }
  }

  return (
    <Container onSubmit={editProfile}>
      <InputsContainer>
        <Label>Nome completo</Label>
        <Input
          borderColor={Colors.editProfileGrey}
          Color={Colors.editProfileGrey}
          type="text"
          placeholder="Nome completo"
          value={completeName}
          onFocus={() => setError(false)}
          onChange={(e) => setCompleteName(e.target.value)}
        />
        <Label marginTop="5%">e-mail</Label>
        <Input
          borderColor={Colors.editProfileGrey}
          Color={Colors.editProfileGrey}
          type="email"
          placeholder="e-mail"
          value={userEmail}
          onFocus={() => setError(false)}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {editPassowrd && (
          <>
            <Label marginTop="5%">Senha</Label>
            <Input
              borderColor={Colors.editProfileGrey}
              Color={Colors.editProfileGrey}
              type="password"
              placeholder="Nome completo"
              value={password}
              onFocus={() => setError(false)}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label marginTop="5%">Repita senha</Label>
            <Input
              borderColor={Colors.editProfileGrey}
              Color={Colors.editProfileGrey}
              type="password"
              placeholder="repita senha"
              value={passwordConfirmation}
              onFocus={() => setError(false)}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </>
        )}
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}

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
