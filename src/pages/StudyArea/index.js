/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import Select from "react-select";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Container,
  Header,
  Icon,
  Topics,
  Content,
  Lesson,
  EndLesson,
} from "./style";

export default function StudyArea() {
  const [markedDone, setMarkedDone] = useState(false);

  function concludeLesson() {
    setMarkedDone(!markedDone);
    if (markedDone) {
      alert(`licao concluida -> ${markedDone}`);
    } else {
      alert(`licao incompleta -> ${markedDone}`);
    }
  }

  const options = [
    { value: 1, label: "Apresentacao - como usar" },
    { value: 2, label: "Apresentacao - Entrando na plataforma" },
    { value: 3, label: "Apresentacao - Fazendo teorias" },
    { value: 4, label: "Apresentacao - Fazendo exercicios" },
  ];

  const bullets = [
    "teoria",
    "exercicio",
    "exercicio",
    "exercicio",
    "exercicio",
  ];

  return (
    <Container>
      <Header>
        <Icon>
          <IoIosArrowBack />
        </Icon>
        <Topics>
          <Select options={options} defaultValue={options[0]} />
        </Topics>
      </Header>
      <Content>
        <ul>
          {bullets.map((b) => (
            <>
              <div />
              <li>
                <BsCircleFill size={25} />
                <p>{b}</p>
              </li>
            </>
          ))}
        </ul>
      </Content>
      <Lesson />
      <EndLesson>
        <label htmlFor="confirm">
          <Input type="checkbox" id="confirm" onChange={concludeLesson} />
          Marcar como concluido
        </label>
        <Button text="Avancar >>" />
      </EndLesson>
    </Container>
  );
}
