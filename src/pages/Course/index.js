/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import SignIn from "../SignIn";
import UserContext from "../../contexts/UserContext";
import Header from "../../components/Header";
import AccordionChapters from "./components/AccordionChapters";
import CourseDetails from "./components/CourseDetails";
import CoursesService from "../../services/CoursesService";

import { Container } from "./styles";

export default function Course() {
  const [courseName, setCourseName] = useState();
  const [courseDescription, setCourseDescription] = useState();
  const [chapters, setChapters] = useState();
  const [userProgress, setUserProgress] = useState();
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();

  if (!user) {
    history.push("/");
    return <SignIn />;
  }

  useEffect(async () => {
    const data = await CoursesService.getById(id, user.token);
    if (data.success) {
      setCourseName(data.success.name);
      setCourseDescription(data.success.description);
      setChapters(data.success.chapters);
      setUserProgress(50);
    } else {
      alert("Erro no servidor, por favor tente novamente mais tarde.");
    }
  }, []);

  return (
    <Container>
      <Header />
      <CourseDetails
        courseName={courseName || "Não foi possível carregar o curso."}
        courseDescription={courseDescription}
        userProgress={userProgress}
      />
      {chapters && <AccordionChapters chapters={chapters} courseId={id} />}
    </Container>
  );
}
