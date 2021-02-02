import React from "react";
import Spinner from "../Spinner";
import Container from "./styles";

export default function Button({ loading, onClick, disabled, text }) {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {loading ? <Spinner /> : text}
    </Container>
  );
}
