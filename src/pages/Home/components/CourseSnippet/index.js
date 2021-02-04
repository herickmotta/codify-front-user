import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import { Snippet, ImageBox, DescriptionBox, ButtonBox } from "./styles";

export default function CourseSnippet({ course }) {
  const { id, name, description, photo } = course;
  return (
    <Snippet>
      <ImageBox>
        <img src={photo} alt="" />
      </ImageBox>

      <DescriptionBox>
        <h1>{name}</h1>
        <p> {description}</p>
        <Link to={`/courses/${id}`}>Ver mais</Link>
      </DescriptionBox>

      <ButtonBox>
        <Button text="Continuar curso >>" />
      </ButtonBox>
    </Snippet>
  );
}
