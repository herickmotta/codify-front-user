/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import mockedCourses from "../../mock/mockedCourses";
import CoursesService from "../../services/CoursesService";
import CardsSession from "./components/CardsSession";
import CourseSnippet from "./components/CourseSnippet";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container, MainContent } from "./styles";

export default function Home() {
  const [courses, setCourses] = useState([{}]);

  useEffect(() => {
    const data = CoursesService.getAll();
    if (data.sucess) {
      setCourses(data.sucess);
    } else {
      alert("Erro ao carregar cursos");
    }
  }, []);

  return (
    <Container>
      <Header />
      <WelcomeBanner />
      <MainContent>
        <CourseSnippet course={courses[0]} />
        <CardsSession title="Meus cursos em andamento" courses={courses} />
        <CardsSession
          title="Experimente nossos outros cursos"
          courses={courses}
        />
      </MainContent>
    </Container>
  );
}
