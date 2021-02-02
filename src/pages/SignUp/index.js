import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InitialBackground from "../../components/InitialBackground";
import Logo from "../../components/Logo";
import Forms from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function SingUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    const correctPassword = password === confirmPassword;
    if (correctPassword && name && email && password) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name, email, password, confirmPassword]);

  function createUser(e) {
    e.preventDefault();

    setLoadingButton(true);
  }

  return (
    <InitialBackground>
      <Logo />
      <Forms onSubmit={createUser}>
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          disabled={disableButton}
          loading={loadingButton}
          text="cadastrar"
        />
        <Link to="/">Ja tem conta? Faca login</Link>
        <Link to="/recoverPassword">Esqueceu sua senha?</Link>
      </Forms>
    </InitialBackground>
  );
}
