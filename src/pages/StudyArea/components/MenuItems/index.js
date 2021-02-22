import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  const { chapterId, topicId } = useParams();
  const [currentTopic, setCurrentTopic] = useState(false);
  const currentRoute = useLocation().pathname;

  useEffect(() => {
    if (
      parseInt(chapterId, 10) === chapter &&
      parseInt(topicId, 10) === item.id
    ) {
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
