import React from "react";
import Header from "../../components/Header";
import CardsSession from "./components/CardsSession";
import CourseSnippet from "./components/CourseSnippet";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container, CentralizePage, MainContent } from "./styles";

export default function Home() {
  return (
    <CentralizePage>
      <Container>
        <Header />
        <WelcomeBanner />
        <MainContent>
          <CourseSnippet />
          <CardsSession title="Meus cursos em andamento" />
          <CardsSession title="Experimente nossos outros cursos" />
        </MainContent>
      </Container>
    </CentralizePage>
  );
}
