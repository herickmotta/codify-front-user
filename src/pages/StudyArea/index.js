/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import TopicsService from "../../services/TopicsService";
import LessonsService from "../../services/LessonsService";
import CoursesService from "../../services/CoursesService";
import UserContext from "../../contexts/UserContext";
import { Container, Content, Menu } from "./style";
import BulletNavigation from "./components/BulletNavigation";
import Header from "./components/Header";
import Activity from "./components/Activity";
import MenuItems from "./components/MenuItems";

export default function StudyArea() {
  const { user } = useContext(UserContext);
  const { id, chapterId, topicId } = useParams();
  const [topicData, setTopicData] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [markedDone, setMarkedDone] = useState(false);
  const [update, setUpdate] = useState(false);
  const [options, setOptions] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const history = useHistory();
  const currentRoute = useLocation().pathname;

  useEffect(async () => {
    const data = await CoursesService.getDataById(id, user.token);

    if (data.success) {
      setOptions(data.success);
    } else {
      alert("erro");
    }
  }, [openMenu]);

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

  function changeTopic(chapId, topId) {
    if (chapterId != chapId || topicId != topId) {
      setCurrentLesson(null);
      history.push(`/courses/${id}/chapters/${chapId}/topics/${topId}`);
    }
  }

  return (
    <Container>
      <Header
        options={options}
        courseId={id}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      {options && (
        <Menu openMenu={openMenu}>
          {options.list.map((e) => (
            <>
              <h2>{e.name}</h2>
              {e.chapterData.map((t) => (
                <MenuItems
                  item={t}
                  chapterId={e.id}
                  changeTopic={changeTopic}
                />
              ))}
            </>
          ))}
        </Menu>
      )}
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
