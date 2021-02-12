/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import TopicsService from "../../services/TopicsService";
import LessonsService from "../../services/LessonsService";
import ChaptersService from "../../services/ChaptersService";
import UserContext from "../../contexts/UserContext";
import { Container, Content } from "./style";
import BulletNavigation from "./components/BulletNavigation";
import Header from "./components/Header";
import Activity from "./components/Activity";

export default function StudyArea() {
  const { user } = useContext(UserContext);
  const { id, chapterId, topicId } = useParams();
  const [topicData, setTopicData] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [markedDone, setMarkedDone] = useState(false);
  const [update, setUpdate] = useState(false);
  const [options, setOptions] = useState(null);
  const history = useHistory();
  const currentRoute = useLocation().pathname;

  useEffect(async () => {
    const data = await ChaptersService.getById(chapterId, topicId, user.token);

    if (data.success) {
      setOptions(data.success);
    } else {
      alert("erro");
    }
  }, [chapterId]);

  useEffect(async () => {
    const data = await TopicsService.getById(
      id,
      chapterId,
      topicId,
      user.token
    );

    if (data.success) {
      setTopicData(data.success);
      if (!currentLesson) {
        setCurrentLesson({ data: data.success.exercises[0], index: 0 });
      }
    } else {
      alert("erro");
    }
  }, [update, currentRoute]);

  async function concludeLesson(lesson) {
    const type = lesson.exerciseDones ? "exercise" : "theory";
    const lessonData = {
      userId: user.id,
      type,
    };

    let result;
    if (!markedDone) {
      result = await LessonsService.markDone(lesson.id, lessonData, user.token);
    } else {
      result = await LessonsService.markOff(lesson.id, lessonData, user.token);
    }
    if (result.success) {
      setUpdate(!update);
    } else {
      alert("erro");
    }
  }
  function next() {
    const nextIndex = currentLesson.index + 1;
    setCurrentLesson({
      data: topicData.exercises[nextIndex],
      index: nextIndex,
    });
  }

  function teste(e) {
    setCurrentLesson(null);
    history.push(`/courses/${id}/chapters/${chapterId}/topics/${e.value}`);
  }

  return (
    <Container>
      <Header options={options} teste={teste} courseId={id} />
      <Content>
        {topicData && currentLesson && (
          <ul>
            {topicData.exercises.map((e, i) => (
              <BulletNavigation
                key={e.id}
                index={i}
                bullet={e}
                current={currentLesson.data}
                setCurrentLesson={setCurrentLesson}
              />
            ))}
          </ul>
        )}
      </Content>
      {currentLesson && (
        <Activity
          currentLesson={currentLesson.data}
          markedDone={markedDone}
          setMarkedDone={setMarkedDone}
          concludeLesson={concludeLesson}
          next={next}
        />
      )}
    </Container>
  );
}
