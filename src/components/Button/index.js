import React from "react";
import Spinner from "../Spinner";
import Container from "./styles";

export default function Button({ loading, onClick, disabled, text, type }) {
  return (
    <Container onClick={onClick} disabled={disabled} type={type}>
      {loading ? <Spinner /> : text}
    </Container>
  );
}
