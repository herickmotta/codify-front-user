/* eslint-disable no-alert */
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AiFillForward } from "react-icons/ai";
import Spinner from "../../../../components/Spinner";
import Colors from "../../../../config/colors";
import UserContext from "../../../../contexts/UserContext";
import CoursesService from "../../../../services/CoursesService";

import { Card, ImageBox, DescriptionBox, StudyButton } from "./styles";

export default function CourseCard({
  id,
  name,
  description,
  photo,
  coursesStarted,
}) {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const goStudyArea = async () => {
    setLoading(true);
    const data = await CoursesService.getById(id, user.token);
    setLoading(false);
    if (data.success) {
      const { chapters } = data.success;
      const { topics } = chapters[0];
      history.push(
        `/courses/${id}/chapters/${chapters[0].id}/topics/${topics[0].id}`
      );
    } else {
      alert("Não foi possível navegar para sua área te estudo");
    }
  };
  return (
    <Card onClick={() => history.push(`/courses/${id}`)}>
      <ImageBox>
        <img src={photo} alt="" />
      </ImageBox>

      <DescriptionBox>
        <h1>{name}</h1>
        <p> {description} </p>
        {coursesStarted ? (
          <StudyButton>
            {loading ? (
              <Spinner color={Colors.blue} />
            ) : (
              <AiFillForward
                color={Colors.blue}
                fontSize="3rem"
                cursor="pointer"
                onClick={() => goStudyArea()}
              />
            )}
          </StudyButton>
        ) : null}
      </DescriptionBox>
    </Card>
  );
}
