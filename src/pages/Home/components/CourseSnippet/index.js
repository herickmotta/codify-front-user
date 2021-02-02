import React from "react";
import { Snippet, ImageBox, DescriptionBox, ButtonBox } from "./styles";

export default function CourseSnippet() {
  return (
    <Snippet>
      <ImageBox>
        <img src="/images/courseimg.png" alt="" />
      </ImageBox>

      <DescriptionBox>
        <h1>JavaScript do zero!</h1>
        <p> Aprenda JavaScript do zero ao avançado, com muita prática!</p>
        <div>Ver mais</div>
      </DescriptionBox>

      <ButtonBox />
    </Snippet>
  );
}
