import React from "react";
import { DropMenu } from "./styles";

export default function DropDownMenu({ isMenuDown, logOut }) {
  return (
    <DropMenu isMenuDown={isMenuDown}>
      <button type="button">Perfil</button>
      <button type="button" onClick={logOut}>
        Sair
      </button>
    </DropMenu>
  );
}
