import React, { useContext } from "react";
import UserContext from "../../../../contexts/UserContext";
import Banner from "./styles";

export default function WelcomeBanner({ isSomeCourseStarted }) {
  const { user } = useContext(UserContext);
  return (
    <Banner>
      <p>
        <div> Olá {user.name}! </div>
        {isSomeCourseStarted ? (
          <span>Você não começou nenhum curso ainda. Experimente um! :)</span>
        ) : (
          <span>Bem-vindo de volta! Continue seu curso atual abaixo :)</span>
        )}
      </p>
    </Banner>
  );
}
