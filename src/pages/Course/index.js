/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import Header from "../../components/Header";
import Button from "../../components/Button";
import mockedCourses from "../../mock/mockedCourses";
import CoursesService from "../../services/CoursesService";

import {
  Container,
  CointainerCourseText,
  ContainerUserProgress,
  ContainerImgAndProgress,
} from "./styles";

export default function Course() {
  const [courseName, setCourseName] = useState();
  const [courseDescription, setCourseDescription] = useState();
  const [userProgress, setUserProgress] = useState();
  const { user } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const courses = mockedCourses();
    const course = courses[id - 1];
    setCourseName(course.name);
    setCourseDescription(course.description);
    setUserProgress(0);
  }, []);

  return (
    <Container>
      <Header />
      <CointainerCourseText>
        <h1>{courseName}</h1>
        <p>{courseDescription}</p>
        <ContainerUserProgress>
          <ContainerImgAndProgress>
            <img src={user.photo} alt="" />

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
      </CointainerCourseText>
    </Container>
  );
}
