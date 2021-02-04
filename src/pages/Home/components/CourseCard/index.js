import React from "react";
import { useHistory } from "react-router-dom";
import { Card, ImageBox, DescriptionBox } from "./styles";

export default function CourseCard({ id, name, description, photo }) {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`/courses/${id}`)}>
      <ImageBox>
        <img src={photo} alt="" />
      </ImageBox>

      <DescriptionBox>
        <h1>{name}</h1>
        <p> {description} </p>
      </DescriptionBox>
    </Card>
  );
}
