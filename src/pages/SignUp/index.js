import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InitialBackground from "../../components/InitialBackground";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SignUpService from "../../services/SignUpService";
import WarningModal from "../../components/WarningModal";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warning, setWarning] = useState();

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
      setWarning("Senhas não batem, verifique o valor digitado.");
      setModalIsOpen(true);
      return;
    }

    setDisableButton(true);
    setLoadingButton(true);

    const body = { name, email, password, passwordConfirmation };
    const data = await SignUpService.signUp(body);

    if (data.success) {
      setWarning("Usuário registrado com sucesso!");
    } else if (data.response.status === 422) {
      setWarning("Dados inválidos.");
    } else if (data.response.status === 409) {
      setWarning("E-mail já cadastrado.");
    } else {
      setWarning("Erro no servidor.");
    }
    setModalIsOpen(true);
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
      {modalIsOpen && (
        <WarningModal
          modalIsOpen={modalIsOpen}
          warning={warning}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </InitialBackground>
  );
}
