import React from "react";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiArrowLeftSLine } from "react-icons/ri";

import { useHistory, Link } from "react-router-dom";
import Button from "../../../../components/Button";

import {
  Container,
  ContainerUserProgress,
  ContainerImgAndProgress,
} from "./styles";

export default function CourseDetails(props) {
  const {
    courseId,
    courseName,
    courseDescription,
    userProgress,
    incompleteCourse,
    chapters,
  } = props;
  const history = useHistory();

  const firstTopic = chapters[0].topics[0].id;

  function openStudyPage() {
    history.push(`/courses/${courseId}/chapters/1/topics/${firstTopic}`);
  }

  return (
    <Container>
      <Link to="/home" className="back-button">
        <RiArrowLeftSLine />
      </Link>
      <h1>{courseName}</h1>
      <p>{courseDescription}</p>
      {!incompleteCourse && (
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
      )}
    </Container>
  );
}
