import React from "react";
import Spinner from "../Spinner";
import Container from "./styles";


export default function Button({
  loading,
  onClick,
  disabled,
  text,
  type,
  width,
  marginRight,
  height,
  color,
  borderColor,
  textColor,
}) {
  return (
    <Container
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      type={type}
      color={color}
      textColor={textColor}
      borderColor={borderColor}
      marginRight={marginRight}
    >
      {loading ? <Spinner /> : text}
    </Container>
  );
}
