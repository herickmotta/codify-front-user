import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import UserContext from "../../contexts/UserContext";
import InitialBackground from "../../components/InitialBackground/styles";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import UserService from "../../services/UserService";
import MyNotification from "../../components/Notification";

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [warning, setWarning] = useState();
  const history = useHistory();
  const { data } = useLocation();

  useEffect(() => {
    if (data) {
      store.addNotification({
        content: MyNotification(data),
        insert: "top",
        isMobile: true,
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
        },
      });
    }
  }, [data]);

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
    const userData = await UserService.signIn(body);

    if (userData.success) {
      setUser(userData.success);
      history.push("/home");
    } else if (userData.response.status === 401) {
      setWarning("E-mail ou senha incorretos.");
    } else if (
      userData.response.data.error === '"email" must be a valid email'
    ) {
      setWarning("E-mail ou senha incorretos.");
    } else if (
      userData.response.data.error ===
      '"password" length must be at least 8 characters long'
    ) {
      setWarning("Senha deve ter no mínimo 8 caracteres");
    } else {
      setWarning("Erro no servidor, por favor tente novamente mais tarde.");
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
        {warning && <p>{warning}</p>}
        <Button
          disabled={disableButton}
          loading={loadingButton}
          text="entrar"
        />
        <Link to="/signup">Primeira vez? Crie uma conta!</Link>
        <Link to="/recover-password">Esqueceu sua senha?</Link>
      </FormsContainer>
      <ReactNotification />
    </InitialBackground>
  );
}
