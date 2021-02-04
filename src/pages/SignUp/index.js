/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import InitialBackground from "../../components/InitialBackground";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SignUpService from "../../services/SignUpService";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (name && email && password && passwordConfirmation) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name, email, password, passwordConfirmation]);

  async function createUser(e) {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert("Senhas não batem, verifique o valor digitado.");
      return;
    }

    setDisableButton(true);
    setLoadingButton(true);

    const body = { name, email, password, passwordConfirmation };
    const data = await SignUpService.signUp(body);
    console.log(data);
    if (data.success) {
      alert("Usuário registrado com sucesso!");
      history.push("/");
    } else if (data.response.status === 422) {
      alert("Dados inválidos.");
    } else if (data.response.status === 409) {
      alert("E-mail já cadastrado.");
    } else {
      alert("Erro no servidor, por favor tente novamente mais tarde.");
    }
    setDisableButton(false);
    setLoadingButton(false);
  }

  return (
    <InitialBackground>
      <Logo />
      <FormsContainer onSubmit={createUser}>
        <Input
          type="text"
          placeHolder="nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeHolder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeHolder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeHolder="repetir senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button
          disabled={disableButton}
          loading={loadingButton}
          text="cadastrar"
        />
        <Link to="/">Ja tem conta? Faca login</Link>
        <Link to="/recoverPassword">Esqueceu sua senha?</Link>
      </FormsContainer>
    </InitialBackground>
  );
}
