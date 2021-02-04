import React from "react";
import CourseSnippet from "../CourseSnippet";
import { Container } from "./styles";

export default function SnippetSection({ title, course }) {
  return (
    <Container>
      <h1>{title}</h1>
      <CourseSnippet course={course} />
    </Container>
  );
}
