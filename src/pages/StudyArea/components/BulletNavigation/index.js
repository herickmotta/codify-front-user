/* eslint-disable */
import React, { useState, useEffect } from "react";
import { BsCircleFill } from "react-icons/bs";
import Container from "./style";

export default function BulletNavigation({
  data,
  current,
  setActivity,
  index,
  currentIndex,
}) {
  const { exerciseDones, theoryDones, youtubeLink } = data;
  const [completed, setCompleted] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (
      (
        exerciseDones && 
        exerciseDones.length > 0
      ) || (
        theoryDones && 
        theoryDones.length > 0
      )
    ) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [current]);

  useEffect(() => {
    if (current === data) setClicked(true);
    else setClicked(false);
  }, [currentIndex]);

  return (
    <Container clicked={clicked} completed={completed}>
      <div
        onClick={() => {
          setActivity({ data, index });
        }}
      >
        <BsCircleFill size={23} />
        <p>{youtubeLink ? "Teoria" : "Exercicio"}</p>
      </div>
      <div />
    </Container>
  );
}
