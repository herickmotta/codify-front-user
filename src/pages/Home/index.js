/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import UserContext from "../../contexts/UserContext";
import CoursesService from "../../services/CoursesService";
import CardsSession from "./components/CardsSession";
import CourseSnippet from "./components/CourseSnippet";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container, MainContent } from "./styles";

export default function Home() {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([{}]);
  useEffect(async () => {
    const data = await CoursesService.getAll(user.token);
    if (data.success) {
      setCourses(data.success);
    } else {
      alert("Erro ao carregar cursos");
    }
  }, []);

  return (
    <Container>
      <Header />
      <WelcomeBanner />
      <MainContent>
        {courses.length > 0 && <CourseSnippet course={courses[0]} />}
        <CardsSession title="Meus cursos em andamento" courses={courses} />
        <CardsSession
          title="Experimente nossos outros cursos"
          courses={courses}
        />
      </MainContent>
    </Container>
  );
}
