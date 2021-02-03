/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import {
  Container,
  CointainerCourseText,
  ContainerUserProgress,
  ContainerImgAndProgress,
} from "./styles";

export default function Course() {
  const [courseName, setCourseName] = useState();
  const [courseDescription, setCourseDescription] = useState();

  useEffect(() => {
    // buscar curso
  }, []);

  return (
    <Container>
      <Header />
      <CointainerCourseText>
        <h1>JavaScript do zero!</h1>
        <p>Aprenda JavaScript do zero ao avançado, com muita prática!</p>
      </CointainerCourseText>
      <ContainerUserProgress>
        <ContainerImgAndProgress>
          <img src="https://avatars.githubusercontent.com/u/4390631" alt="" />

          <div>
            <p>Você não iniciou esse curso ainda</p>
            <span> PROGRESSO </span>
          </div>
        </ContainerImgAndProgress>
        <Button>Iniciar curso</Button>
      </ContainerUserProgress>
    </Container>
  );
}
