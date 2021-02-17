import React, { useState, useEffect } from "react";

import CourseCard from "../CourseCard";
import { Container, CardsList } from "./styles";

export default function CardsSection({ title, courses, coursesStarted }) {
  const [displayCourses, setDisplayCourses] = useState([]);
  useEffect(() => {
    setDisplayCourses(courses.slice(0));
  }, []);
  return (
    <Container>
      <h1>{title}</h1>
      <CardsList>
        {displayCourses.map((c) => (
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
