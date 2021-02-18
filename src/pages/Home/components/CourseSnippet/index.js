import React from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../../../../components/Button";
import { Snippet, ImageBox, DescriptionBox, ButtonBox } from "./styles";

export default function CourseSnippet({ course }) {
  const { id, name, description, photo } = course;

  const history = useHistory();
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
        <Button
          text="Continuar curso >>"
          onClick={() => history.push(`/study-area/${"Colocar-id-do-curso"}`)}
        />
      </ButtonBox>
    </Snippet>
  );
}
