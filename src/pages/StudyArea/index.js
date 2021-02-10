/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Container, Content } from "./style";
import BulletNavigation from "./components/BulletNavigation";
import Header from "./components/Header";
import Activity from "./components/Activity";

const bullets = [
  {
    id: 1,
    type: "teoria",
    link: "https://www.youtube.com/watch?v=tAGnKpE4NCI&ab_channel=Metallica",
    done: true,
  },
  { id: 2, type: "Exercicio", name: "Exercicio 1", done: true },
  { id: 3, type: "exercicio", name: "Exercicio 2", done: false },
  { id: 4, type: "exercicio", name: "Exercicio 3", done: true },
  { id: 5, type: "exercicio", name: "Exercicio 4", done: false },
];
const options = [
  { value: 1, label: "Apresentacao - como usar" },
  { value: 2, label: "Apresentacao - Entrando na plataforma" },
  { value: 3, label: "Apresentacao - Fazendo teorias" },
  { value: 4, label: "Apresentacao - Fazendo exercicios" },
];

export default function StudyArea() {
  const [currentLesson, setCurrentLesson] = useState(bullets[1]);

  function changeLesson(id) {
    const index = id - 1;
    setCurrentLesson(bullets[index]);
  }

  function concludeLesson() {
    alert("send conclud lesson to back");
  }

  return (
    <Container>
      <Header list={options} />
      <Content>
        <ul>
          {bullets.map((b) => (
            <BulletNavigation
              key={b.id}
              bullet={b}
              changeLesson={changeLesson}
              current={currentLesson}
            />
          ))}
        </ul>
      </Content>
      <Activity currentLesson={currentLesson} concludeLesson={concludeLesson} />
    </Container>
  );
}
