import React, { useState } from "react";
import { Link } from "react-router-dom";

import InitialBackground from "../../components/InitialBackground/styles";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import WarningModal from "../../components/WarningModal";
import Colors from "../../config/colors";

export default function SignIn() {
  const [warning, setWarning] = useState(false);
  const [email, setEmail] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  async function recoverPassword(e) {
    e.preventDefault();

    // caso sucesso
    // setMessage("kjsasadjksad");
    // setModalIsOpen(true);

    // caso de erro
    // setWarning(true);
    // setMessage("kjsasadjksad");
    // setModalIsOpen(true);
  }

  return (
    <InitialBackground>
      <Logo />
      <FormsContainer onSubmit={recoverPassword}>
        <Input
          type="email"
          placeHolder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {warning && <p>{warning}</p>}
        <Button text="Recuperar senha" />
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
    </InitialBackground>
  );
}
