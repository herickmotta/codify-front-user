import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import Container from "./style";

export default function Menu({ item, changeTopic, chapterId }) {
  return (
    <Container onClick={() => changeTopic(chapterId, item.id)}>
      {item.completed ? <AiFillCheckCircle color="green" /> : <BsCircleFill />}
      {item.name}
    </Container>
  );
}
