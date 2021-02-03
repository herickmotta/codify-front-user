import React, { useContext } from "react";
import UserContext from "../../../../contexts/UserContext";
import Banner from "./styles";

export default function WelcomeBanner() {
  const { user } = useContext(UserContext);
  return (
    <Banner>
      <p>
        <div> Olá {user.name}! </div>
        <span>Você não começou nenhum curso ainda. Experimente um! :)</span>
      </p>
    </Banner>
  );
}
