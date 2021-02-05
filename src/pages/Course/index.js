/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import SignIn from "../SignIn";
import UserContext from "../../contexts/UserContext";
import Header from "../../components/Header";
import Button from "../../components/Button";
import mockedCourses from "../../mock/mockedCourses";

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
  const history = useHistory();

  if (!user) {
    history.push("/");
    return <SignIn />;
  }

  useEffect(() => {
    const course = {
      id: 1,
      name: "JavaScript do zero!",
      description: "Aprenda JavaScript do zero ao avançado, com muita prática!",
      photo: "https://miro.medium.com/max/1800/1*5eV1xmJs2-sJ4DdejfdnQA.png",
    };
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
      </CointainerCourseText>
    </Container>
  );
}
