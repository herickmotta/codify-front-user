import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import Container from "./style";

export default function MenuItems({
  item,
  changeTopic,
  chapter,
  openMenu,
  setOpenMenu,
}) {
  function navegate() {
    setOpenMenu(!openMenu);
    changeTopic(chapter, item.id);
  }

  return (
    <Container onClick={navegate}>
      {item.completed ? <AiFillCheckCircle color="green" /> : <BsCircleFill />}
      {item.name}
    </Container>
  );
}
