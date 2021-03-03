import React from "react";
import { GoCheck } from "react-icons/go";
import Container from "./styles";

export default function MyNotification({ title, message }) {
  return (
    <Container>
      <GoCheck />
      <div>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </Container>
  );
}
