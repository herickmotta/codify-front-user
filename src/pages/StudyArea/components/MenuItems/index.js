/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import Container from "./style";

export default function MenuItems({
  item,
  changeTopic,
  chapter,
  openMenu,
  setOpenMenu,
  chapterId,
  topicId,
}) {
  const [currentTopic, setCurrentTopic] = useState(false);
  const currentRoute = useLocation().pathname;

  useEffect(() => {
    if (chapterId === chapter && topicId === item.id) {
      setCurrentTopic(true);
    } else {
      setCurrentTopic(false);
    }
  }, [currentRoute]);

  function navegate() {
    setOpenMenu(!openMenu);
    changeTopic(chapter, item.id);
  }

  return (
    <Container current={currentTopic} onClick={navegate}>
      {item.completed ? <AiFillCheckCircle color="green" /> : <BsCircleFill />}
      {item.name}
    </Container>
  );
}
