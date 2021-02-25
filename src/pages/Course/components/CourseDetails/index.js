import React, { useContext } from "react";
import Avatar from "react-avatar";
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
import CoursesService from "../../../../services/CoursesService";
import UserContext from "../../../../contexts/UserContext";

export default function CourseDetails(props) {
  const {
    courseId,
    courseName,
    courseDescription,
    userProgress,
    incompleteCourse,
    chapters,
    isCourseStarted,
  } = props;
  const { user } = useContext(UserContext);
  const history = useHistory();

  const firstChapterId = chapters[0].id;
  const firstTopicId = chapters[0].topics[0].id;

  async function openStudyPage() {
    if (!isCourseStarted) {
      const data = await CoursesService.startCourse(courseId, user.token);
      if (data) {
        history.push(
          `/courses/${courseId}/chapters/${firstChapterId}/topics/${firstTopicId}`
        );
      } else {
        alert("Erro no servidor, por favor tente novamente mais tarde.");
      }
    } else {
      alert("Faltando implementação de continuar o curso");
    }
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
            <Avatar name={user.name} size="50px" />

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
            text={isCourseStarted ? "Continuar curso >>" : "Iniciar curso >>"}
            onClick={() => openStudyPage()}
          />
        </ContainerUserProgress>
      )}
    </Container>
  );
}
