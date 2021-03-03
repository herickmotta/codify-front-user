import React from "react";
import Spinner from "../Spinner";
import Container from "./styles";

function Button({ loading, onClick, disabled, text, type, width, height }) {
  return (
    <Container
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {loading ? <Spinner /> : text}
    </Container>
  );
}

export default Button;
