import React from "react";
import Header from "../../components/Header";
import mockedCourses from "../../mock/mockedCourses";
import CardsSession from "./components/CardsSession";
import CourseSnippet from "./components/CourseSnippet";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container, MainContent } from "./styles";

export default function Home() {
  const courses = mockedCourses();
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
