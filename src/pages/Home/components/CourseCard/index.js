import React from "react";
import { Card, ImageBox, DescriptionBox } from "./styles";

export default function CourseCard({ name, description, photo }) {
  return (
    <Card>
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
