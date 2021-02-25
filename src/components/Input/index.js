import React from "react";
import Container from "./styles";

export default function Input({
  onFocus,
  type,
  placeHolder,
  value,
  onChange,
  id,
}) {
  return (
    <Container
      type={type}
      placeholder={placeHolder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      id={id}
    />
  );
}
