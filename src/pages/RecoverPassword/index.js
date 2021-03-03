import React, { useState } from "react";
import { Link } from "react-router-dom";

import InitialBackground from "../../components/InitialBackground/styles";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import WarningModal from "../../components/WarningModal";
import Colors from "../../config/colors";
import UserService from "../../services/UserService";
import GoogleAnalyticsTracker from "../../hooks/GoogleAnalyticsTracker";

export default function RecoverPassword() {
  const [warning, setWarning] = useState(false);
  const [email, setEmail] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function recoverPassword(e) {
    e.preventDefault();

    setLoading(true);
    const data = await UserService.sendEmailToRecoverPassword({ email });
    setLoading(false);
    if (data === 422) {
      setWarning(true);
      setMessage("E-mail inválido");
    }
    if (data === 404) {
      setWarning(true);
      setMessage("E-mail não registrado, por favor, cadastre-se!");
    } else {
      setWarning(false);
      setMessage(
        "O link para redefinir sua senha foi enviado para seu E-mail."
      );
      setModalIsOpen(true);
    }
  }

  return (
    <InitialBackground>
      <Logo />
      <FormsContainer onSubmit={recoverPassword}>
        <Input
          type="email"
          placeHolder="e-mail"
          value={email}
          onFocus={() => setWarning(false)}
          onChange={(e) => setEmail(e.target.value)}
        />
        {warning && <p>{message}</p>}
        <Button text="Recuperar senha" loading={loading} disabled={loading} />
        <Link to="/">Voltar para login</Link>
      </FormsContainer>
      {modalIsOpen && (
        <WarningModal
          modalIsOpen={modalIsOpen}
          warning={message}
          setModalIsOpen={setModalIsOpen}
          color={warning ? Colors.red : Colors.green}
        />
      )}
      <GoogleAnalyticsTracker />
    </InitialBackground>
  );
}
