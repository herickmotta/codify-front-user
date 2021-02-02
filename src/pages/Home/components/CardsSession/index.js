import React from "react";
import CourseCard from "../CourseCard";
import { Container, CardsList } from "./styles";

export default function CardsSession() {
  return (
    <Container>
      <h1>Meus cursos em andamento</h1>
      <CardsList>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </CardsList>
    </Container>
  );
}
