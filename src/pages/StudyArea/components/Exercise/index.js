import React from "react";
import Container from "./style";

export default function Exercise({ name }) {
  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
}
