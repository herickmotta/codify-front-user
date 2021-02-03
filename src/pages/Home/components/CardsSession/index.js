import React from "react";
import CourseCard from "../CourseCard";
import { Container, CardsList } from "./styles";

export default function CardsSession({ title, courses }) {
  return (
    <Container>
      <h1>{title}</h1>
      <CardsList>
        {courses.map((c) => (
          <CourseCard
            name={c.name}
            description={c.description}
            photo={c.photo}
          />
        ))}
      </CardsList>
    </Container>
  );
}
