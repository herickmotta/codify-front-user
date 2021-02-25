import React from "react";
import Container from "./style";

export default function ExerciseWording({ name, wording, example }) {
  return (
    <Container>
      <h1>{name}</h1>
      <p>{wording}</p>
      <h3>Exemplo:</h3>
      <p>{example}</p>
    </Container>
  );
}
