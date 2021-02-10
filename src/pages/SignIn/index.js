import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import InitialBackground from "../../components/InitialBackground/styles";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SignInService from "../../services/SignInService";
import WarningModal from "../../components/WarningModal";

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warning, setWarning] = useState();
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
      setWarning("Dados inválidos.");
    } else if (data.response.status === 401) {
      setWarning("E-mail ou senha incorretos.");
    } else if (data.response.status === 409) {
      setWarning("E-mail já cadastrado.");
    } else {
      setWarning("Erro no servidor, por favor tente novamente mais tarde.");
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
