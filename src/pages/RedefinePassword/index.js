import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import InitialBackground from "../../components/InitialBackground/styles";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import UserService from "../../services/UserService";

export default function RedefinePassword() {
  const [warning, setWarning] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { id, token } = useParams();
  const history = useHistory();

  async function redefinePassword(e) {
    e.preventDefault();

    setLoading(true);
    const userData = await UserService.redefinePassword({
      id,
      token,
      password: newPassword,
      passwordConfirmation: newPasswordConfirmation,
    });
    setLoading(false);
    if (newPassword === "") {
      setWarning(true);
      setMessage("Campo nova senha é obrigatório");
    }
    if (newPasswordConfirmation === "") {
      setWarning(true);
      setMessage("Campo repita sua nova senha é obrigatório");
    }
    if (newPassword.length < 8) {
      setWarning(true);
      setMessage("Sua nova senha deve ter no mínimo 8 caracteres");
    }

    if (userData === 'password" is required') {
      setWarning(true);
      setMessage("Campo nova senha é obrigatório");
    }
    if (userData === 404 || userData === 401) {
      setWarning(true);
      setMessage(
        "Seção expirou!, por favor, volte para login e clique em recuperar senha novamente"
      );
    }
    if (newPassword !== newPasswordConfirmation) {
      setWarning(true);
      setMessage("Os campos devem ser iguais");
    } else {
      history.push({
        pathname: "/",
        data: {
          title: "Senha redefinida com sucesso!",
          message: "Faça login para continuar",
        },
      });
    }
  }

  return (
    <InitialBackground>
      <Logo />
      <FormsContainer onSubmit={redefinePassword}>
        <Input
          onFocus={() => setWarning(false)}
          type="password"
          placeHolder="nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Input
          onFocus={() => setWarning(false)}
          type="password"
          placeHolder="repita sua nova senha"
          value={newPasswordConfirmation}
          onChange={(e) => setNewPasswordConfirmation(e.target.value)}
        />
        {warning && <p>{message}</p>}
        <Button text="Redefinir senha" loading={loading} disabled={loading} />
        <Link to="/">Voltar para login</Link>
      </FormsContainer>
    </InitialBackground>
  );
}
