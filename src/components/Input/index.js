import React from "react";
import Container from "./styles";

export default function Input({ type, placeHolder, value, onChange }) {
  return (
    <Container
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
}
