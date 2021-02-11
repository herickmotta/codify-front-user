/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Content } from "./style";
import BulletNavigation from "./components/BulletNavigation";
import Header from "./components/Header";
import Activity from "./components/Activity";
import TopicsService from "../../services/TopicsService";
import LessonsService from "../../services/LessonsService";

const options = [
  { value: 1, label: "Apresentacao - como usar" },
  { value: 2, label: "Apresentacao - Entrando na plataforma" },
  { value: 3, label: "Apresentacao - Fazendo teorias" },
  { value: 4, label: "Apresentacao - Fazendo exercicios" },
];

export default function StudyArea() {
  const { id, chapterId, topicId } = useParams();
  const [topicData, setTopicData] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [markedDone, setMarkedDone] = useState(false);
  const [update, setUpdate] = useState(false);

  // will come by context
  const token = 123456789;

  useEffect(async () => {
    const data = await TopicsService.getById(id, chapterId, topicId, token);

    if (data.success) {
      setTopicData(data.success);
      if (!currentLesson) {
        setCurrentLesson({ data: data.success.exercises[0], index: 0 });
      }
    } else {
      alert("erro");
    }
  }, [update]);

  async function concludeLesson(lesson) {
    const type = lesson.exerciseDones ? "exercise" : "theory";
    const lessonData = {
      // will come by context
      userId: 1,
      type,
    };

    let result;
    if (!markedDone) {
      result = await LessonsService.markDone(lesson.id, lessonData, token);
    } else {
      result = await LessonsService.markOff(lesson.id, lessonData, token);
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

  return (
    <Container>
      <Header list={options} courseId={id} />
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
