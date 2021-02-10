/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import Container from "./style";

export default function BulletNavigation({ bullet, changeLesson, current }) {
  const [clicked, setClicked] = useState(false);

  if (clicked && current.id !== bullet.id) setClicked(false);
  else if (!clicked && current.id === bullet.id) setClicked(true);

  return (
    <Container clicked={clicked}>
      <div
        onClick={() => {
          changeLesson(bullet.id);
        }}
      >
        <BsCircleFill size={25} />
        <p>{bullet.type}</p>
      </div>
      <div />
    </Container>
  );
}
