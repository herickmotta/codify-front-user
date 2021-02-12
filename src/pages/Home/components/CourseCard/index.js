import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../../contexts/UserContext";
import CoursesService from "../../../../services/CoursesService";

import { Card, ImageBox, DescriptionBox } from "./styles";

export default function CourseCard({ id, name, description, photo }) {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const goStudyArea = async (courseId) => {
    const data = await CoursesService.getById(courseId, user.token);
    if (data) {
      console.log(data);
      history.push(`/courses/:id/chapters/:chapterId/topics/:topicId`);
    } else {
      alert("Não foi possível navegar para sua área te estudo");
    }
  };
  return (
    <Card onClick={() => goStudyArea(id)}>
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
