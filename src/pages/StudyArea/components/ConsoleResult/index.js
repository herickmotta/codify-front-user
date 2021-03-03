import React, { useState, useEffect } from "react";
import { Container, Title, Message } from "./style";

export default function ConsoleResult({ test, state, index, clicked }) {
  const [testDescription, setDescription] = useState();
  const [errorMessage, setMessage] = useState();

  useEffect(() => {
    if (test.error) {
      const warning = test.error.expected
        ? `Esperava retornar ${test.error.expected} e retornou
      ${test.error.actual}`
        : test.error.message;

      setMessage(warning);
    } else {
      setMessage(null);
    }

    setDescription(test.title);
  }, [test]);
  return (
    <Container>
      <Title state={state}>
        <h3>Teste {index + 1}:&nbsp;</h3>
        <span>&nbsp;{state === "passed" ? "Sucesso!" : "Erro!"}</span>
        <p />
      </Title>
      <Message>
        <p>{testDescription}</p>
        {errorMessage && <p>Detalhes: {errorMessage}</p>}
      </Message>
    </Container>
  );
}
