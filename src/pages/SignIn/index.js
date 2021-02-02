import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import InitialBackground from "../../components/InitialBackground";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (email && password) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email, password]);

  function createUser(e) {
    e.preventDefault();

    setLoadingButton(true);
    history.push("/home");
  }

  return (
    <InitialBackground>
      <Logo />
      <FormsContainer onSubmit={createUser}>
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
        <Button
          disabled={disableButton}
          loading={loadingButton}
          text="entrar"
        />
        <Link to="/signup">Primeira vez? Crie uma conta!</Link>
        <Link to="/recoverPassword">Esqueceu sua senha?</Link>
      </FormsContainer>
    </InitialBackground>
  );
}
