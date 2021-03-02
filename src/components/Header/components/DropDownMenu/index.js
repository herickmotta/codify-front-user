import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../../contexts/UserContext";
import UserService from "../../../../services/UserService";
import Spinner from "../../../Spinner";
import { DropMenu } from "./styles";

export default function DropDownMenu({ isMenuDown }) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    const data = await UserService.logOut(user.token);
    setLoading(false);
    if (data) {
      history.push("/");
      localStorage.clear();
    } else {
      setUser(null);
    }
  };

  const goToPerfil = () => {
    history.push("/profile");
  };

  return (
    <DropMenu isMenuDown={isMenuDown}>
      <button type="button" onClick={goToPerfil}>
        Perfil
      </button>
      <button type="button" onClick={logOut}>
        {loading ? <Spinner color="black" /> : "Sair"}
      </button>
    </DropMenu>
  );
}
