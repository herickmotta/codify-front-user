/* eslint-disable no-alert */
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../../../../components/Spinner";
import Colors from "../../../../config/colors";
import UserContext from "../../../../contexts/UserContext";

import { Card, ImageBox, DescriptionBox, StudyButton } from "./styles";
import Button from "../../../../components/Button";

export default function CourseCard({
  id,
  name,
  description,
  photo,
  coursesStarted,
  LastTaskSeensData,
}) {
  const { setLastTaskData } = useContext(UserContext);
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const {
    chapterId,
    courseId,
    theoryId,
    exerciseId,
    topicId,
  } = LastTaskSeensData;

  const travelToStudyArea = (e) => {
    e.stopPropagation();
    setLoading(true);
    if (exerciseId) {
      setLastTaskData({ exerciseId });
    }
    if (theoryId) {
      setLastTaskData({ theoryId });
    }
    setLoading(false);
    history.push(
      `/courses/${courseId}/chapters/${chapterId}/topics/${topicId}`
    );
  };

  return (
    <Card onClick={() => history.push(`/courses/${id}`)}>
      <ImageBox>
        <img src={photo} alt="" />
      </ImageBox>

      <DescriptionBox>
        <div>
          <h1>{name}</h1>
          <p> {description} </p>
        </div>
        {coursesStarted ? (
          <StudyButton>
            {loading ? (
              <Spinner color={Colors.blue} />
            ) : (
              <Button
                text="Continuar curso >>"
                onClick={(e) => travelToStudyArea(e)}
              />
            )}
          </StudyButton>
        ) : (
          <StudyButton />
        )}
      </DescriptionBox>
    </Card>
  );
}
