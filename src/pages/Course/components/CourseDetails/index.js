import React from "react";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useHistory } from "react-router-dom";
import Button from "../../../../components/Button";

import {
  Container,
  ContainerUserProgress,
  ContainerImgAndProgress,
} from "./styles";

export default function CourseDetails(props) {
  const { courseId, courseName, courseDescription, userProgress } = props;
  const history = useHistory();

  function openStudyPage() {
    history.push(`/courses/${courseId}/chapters/1/topics/1`);
  }

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
              min={10}
              max={100}
              variant="success"
              animated
            />
          </div>
        </ContainerImgAndProgress>
        <Button
          text={userProgress ? "Continuar curso >>" : "Iniciar curso >>"}
          onClick={() => openStudyPage()}
        />
      </ContainerUserProgress>
    </Container>
  );
}
