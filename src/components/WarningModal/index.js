import React from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { GoCheck } from "react-icons/go";
import { customStyles, Icon } from "./styles";
import Button from "../Button";
import FormsContainer from "../FormsContainer";

export default function WarningModal({ modalIsOpen, warning, setModalIsOpen }) {
  const history = useHistory();

  function closeModal(e) {
    e.preventDefault();
    setModalIsOpen(false);
    history.push("/");
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <FormsContainer onSubmit={closeModal}>
        <Icon>
          <GoCheck />
        </Icon>
        <p>{warning}</p>
        <Button type="submit" loading={false} text="OK" disabled={false} />
      </FormsContainer>
    </Modal>
  );
}
