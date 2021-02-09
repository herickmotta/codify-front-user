import React from "react";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "../../../../components/Button";

import {
  Container,
  ContainerUserProgress,
  ContainerImgAndProgress,
} from "./styles";

export default function CourseDetails(props) {
  const { courseName, courseDescription, userProgress } = props;

  return (
    <Container>
      <h1>{courseName}</h1>
      <p>{courseDescription}</p>
      <ContainerUserProgress>
        <ContainerImgAndProgress>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIyiiNbz3VC9Afr-LqWpcw7loxjPnacfZSA&usqp=CAU"
            alt=""
          />

          <div>
            <p>
              {userProgress === 0
                ? "Você não iniciou esse curso ainda"
                : `Faltam só ${100 - userProgress}% para concluir o curso!`}
            </p>
            <ProgressBar
              now={userProgress}
              label={`${userProgress}%`}
              min={15}
              variant="success"
              animated
            />
          </div>
        </ContainerImgAndProgress>
        <Button text="Iniciar curso >>" />
      </ContainerUserProgress>
    </Container>
  );
}
