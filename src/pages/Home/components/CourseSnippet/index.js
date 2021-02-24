import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../../../../components/Button";
import UserContext from "../../../../contexts/UserContext";
import { Snippet, ImageBox, DescriptionBox, ButtonBox } from "./styles";

export default function CourseSnippet({ course }) {
  const { id, name, description, photo, LastTaskSeensData } = course;
  const {
    chapterId,
    courseId,
    theoryId,
    exerciseId,
    topicId,
  } = LastTaskSeensData;
  const history = useHistory();

  const { setLastTaskData } = useContext(UserContext);

  const travelToStudyArea = () => {
    if (exerciseId) {
      setLastTaskData({ exerciseId });
    }
    if (theoryId) {
      setLastTaskData({ theoryId });
    }

    history.push(
      `/courses/${courseId}/chapters/${chapterId}/topics/${topicId}`
    );
  };

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
        <Button text="Continuar curso >>" onClick={() => travelToStudyArea()} />
      </ButtonBox>
    </Snippet>
  );
}
