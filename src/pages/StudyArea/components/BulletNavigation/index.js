/* eslint-disable */
import React, { useState, useEffect } from "react";
import { BsCircleFill } from "react-icons/bs";
import Container from "./style";

export default function BulletNavigation({
  bullet,
  current,
  setCurrentLesson,
  index
}) {
  const [completed, setCompleted] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (!completed && 
      (
        (
          bullet.exerciseDones && 
          bullet.exerciseDones.length > 0
        ) || (
          bullet.theoryDones && 
          bullet.theoryDones.length > 0
        )
      )
    ) {
      setCompleted(true);
    } else if (
      (completed &&
        (
          bullet.exerciseDones &&
          bullet.exerciseDones.length === 0
        ) || (
          bullet.theoryDones && 
          bullet.theoryDones.length === 0
        )
      )
    ) {
      setCompleted(false);
    }
  }, [clicked]);

  if (!clicked && current === bullet) setClicked(true);
  else if (clicked && current !== bullet) setClicked(false);

  return (
    <Container clicked={clicked} completed={completed}>
      <div
        onClick={() => {
          setCurrentLesson({ data: bullet, index });
        }}
      >
        <BsCircleFill size={25} />
        <p>{bullet.youtubeLink ? "Teoria" : "Exercicio"}</p>
      </div>
      <div />
    </Container>
  );
}
