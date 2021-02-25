import React, { useState } from "react";
import { Link } from "react-router-dom";

import InitialBackground from "../../components/InitialBackground/styles";
import Logo from "../../components/Logo";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import WarningModal from "../../components/WarningModal";
import Colors from "../../config/colors";

export default function RedefinePassword() {
  const [warning, setWarning] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  async function redefinePassword(e) {
    e.preventDefault();
  }

  return (
    <InitialBackground>
      <Logo />
      <FormsContainer onSubmit={redefinePassword}>
        <Input
          type="password"
          placeHolder="nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Input
          type="password"
          placeHolder="repita sua nova senha"
          value={newPasswordConfirmation}
          onChange={(e) => setNewPasswordConfirmation(e.target.value)}
        />
        {warning && <p>{warning}</p>}
        <Button text="Redefinir senha" />
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
