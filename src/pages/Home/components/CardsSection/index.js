import React from "react";

import CourseCard from "../CourseCard";
import { Container, CardsList } from "./styles";

export default function CardsSection({ title, courses, coursesStarted }) {
  return (
    <Container>
      <h1>{title}</h1>
      <CardsList>
        {courses.map((c) => (
          <CourseCard
            coursesStarted={coursesStarted}
            id={c.id}
            name={c.name}
            description={c.description}
            photo={c.photo}
          />
        ))}
      </CardsList>
    </Container>
  );
}
