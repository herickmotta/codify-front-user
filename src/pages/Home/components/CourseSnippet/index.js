import React from "react";
import Button from "../../../../components/Button";
import { Snippet, ImageBox, DescriptionBox, ButtonBox } from "./styles";

export default function CourseSnippet({ course }) {
  const { name, description, photo } = course;
  return (
    <Snippet>
      <ImageBox>
        <img src={photo} alt="" />
      </ImageBox>

      <DescriptionBox>
        <h1>{name}</h1>
        <p> {description}</p>
        <div>Ver mais</div>
      </DescriptionBox>

      <ButtonBox>
        <Button text="Continuar curso >>" />
      </ButtonBox>
    </Snippet>
  );
}
