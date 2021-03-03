import React from "react";
import Container from "./styles";

export default function Input({
  onFocus,
  type,
  placeHolder,
  value,
  onChange,
  borderColor,
  Color,
  id,
}) {
  return (
    <Container
      borderColor={borderColor}
      Color={Color}
      type={type}
      placeholder={placeHolder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      id={id}
    />
  );
}
