import React from "react";
import CourseCard from "../CourseCard";
import { Container, CardsList } from "./styles";

export default function CardsSession({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <CardsList>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </CardsList>
    </Container>
  );
}
