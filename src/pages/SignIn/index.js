/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import InitialBackground from "../../components/InitialBackground";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SignInService from "../../services/SignInService";

export default function SignIn() {
  const { setUser } = useContext(UserContext);
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

  async function createUser(e) {
    e.preventDefault();

    setDisableButton(true);
    setLoadingButton(true);

    const body = { email, password };
    const data = await SignInService.signIn(body);

    if (data.success) {
      setUser(data.success);
      history.push("/home");
    } else if (data.response.status === 422) {
      alert("Dados inválidos.");
    } else if (data.response.status === 404) {
      alert("E-mail ou senha incorretos.");
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
