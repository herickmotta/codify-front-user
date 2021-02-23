import React from "react";
import Container from "./style";

export default function Exercise({ name, wording }) {
  return (
    <Container>
      <h1>{name}</h1>
      <p>
        {wording} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Volutpat vitae in aenean quis quam praesent arcu, orci. Ipsum habitasse
        proin consectetur vel venenatis. Turpis libero aliquet cras vitae nunc
        commodo gravida. Sapien eget urna, ante mattis bibendum massa, feugiat.
        Lorem ipsum dolor sit amet, consectetur
      </p>
    </Container>
  );
}
