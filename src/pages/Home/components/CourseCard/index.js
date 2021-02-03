import React from "react";
import { Card, ImageBox, DescriptionBox } from "./styles";

export default function CourseCard() {
  return (
    <Card>
      <ImageBox>
        <img src="/images/courseimg.png" alt="" />
      </ImageBox>

      <DescriptionBox>
        <h1>JavaScript do zero!</h1>
        <p> Aprenda JavaScript do zero ao avançado, com muita prática!</p>
      </DescriptionBox>
    </Card>
  );
}
