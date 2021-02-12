import React from "react";
import Container from "./styles";

export default function Input({ type, placeHolder, value, onChange, id }) {
  return (
    <Container
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
}
