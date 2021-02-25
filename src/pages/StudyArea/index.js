/* eslint-disable react/no-array-index-key */
/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import TopicsService from "../../services/TopicsService";
import ActivitiesService from "../../services/ActivitiesService";
import CoursesService from "../../services/CoursesService";
import UserContext from "../../contexts/UserContext";
import { Container, Content, Menu } from "./style";
import BulletNavigation from "./components/BulletNavigation";
import Header from "./components/Header";
import Activities from "./components/Activities";
import MenuItems from "./components/MenuItems";

export default function StudyArea() {
  const { user, lastTaskData, setLastTaskData } = useContext(UserContext);
  const { id, chapterId, topicId } = useParams();
  const [topicActivities, setTopicActivities] = useState(null);
  const [currentActivity, setActivity] = useState(null);
  const [markedDone, setMarkedDone] = useState(false);
  const [update, setUpdate] = useState(false);
  const [options, setOptions] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();
  const currentRoute = useLocation().pathname;

  useEffect(async () => {
    const data = await CoursesService.getDataById(id, topicId, user.token);

    if (data) {
      setOptions(data);
    } else {
      alert("erro");
    }
  }, [openMenu, currentRoute]);

  useEffect(async () => {
    const data = await TopicsService.getById(
      id,
      chapterId,
      topicId,
      user.token
    );

    if (data.success) {
      const { activities } = data.success;
      setTopicActivities(activities);

      let newActivity;
      if (currentActivity) {
        const { index } = currentActivity;
        newActivity = {
          data: activities[index],
          index,
        };
      } else if (!currentActivity && lastTaskData && lastTaskData.exerciseId) {
        const exerciseIndex = activities.findIndex(
          (a) => a.exerciseDones && a.id === lastTaskData.exerciseId
        );
        newActivity = {
          data: activities[exerciseIndex],
          index: exerciseIndex,
        };
        setLastTaskData(null);
      } else {
        newActivity = {
          data: activities[0],
          index: 0,
        };
      }
      setActivity(newActivity);
    } else {
      alert("erro");
    }
  }, [update, currentRoute]);

  useEffect(async () => {
    if (currentActivity && currentActivity.data) {
      const body = {
        courseId: parseInt(id, 10),
        chapterId: parseInt(chapterId, 10),
        topicId: parseInt(topicId, 10),
      };
      if (currentActivity.data.exerciseDones) {
        body.type = "Exercise";
        body.exerciseId = currentActivity.data.id;
      } else {
        body.type = "Theory";
        body.theoryId = currentActivity.data.id;
      }

      const data = await ActivitiesService.lastSeen(id, body, user.token);

      if (!data.success) {
        alert(
          `Erro ${data.response.status} ao atualizar ultima atividade vista.`
        );
      }
    }
  }, [currentActivity]);

  async function concludeActivity(activity) {
    const type = activity.exerciseDones ? "exercise" : "theory";
    const activityData = {
      userId: user.id,
      type,
    };

    let result;
    if (!markedDone) {
      result = await ActivitiesService.markDone(
        activity.id,
        activityData,
        user.token
      );
    } else {
      result = await ActivitiesService.markOff(
        activity.id,
        activityData,
        user.token
      );
    }
    if (result.success) {
      setUpdate(!update);
    } else {
      alert("erro");
    }
  }

  function changeTopic(chapId, topId) {
    if (parseInt(chapterId, 10) !== chapId || parseInt(topicId, 10) !== topId) {
      setActivity(null);
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
                  key={t.id}
                  item={t}
                  chapter={e.id}
                  changeTopic={changeTopic}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                />
              ))}
            </>
          ))}
        </Menu>
      )}
      <Content>
        {topicActivities && currentActivity && (
          <ul>
            {topicActivities.map((e, i) => (
              <BulletNavigation
                key={i}
                index={i}
                data={e}
                current={currentActivity.data}
                currentIndex={currentActivity.index}
                setActivity={setActivity}
              />
            ))}
          </ul>
        )}
      </Content>
      {currentActivity && (
        <Activities
          currentActivity={currentActivity.data}
          activityIndex={currentActivity.index}
          setActivity={setActivity}
          markedDone={markedDone}
          setMarkedDone={setMarkedDone}
          concludeActivity={concludeActivity}
          topicActivities={topicActivities}
          options={options}
          changeTopic={changeTopic}
        />
      )}
    </Container>
  );
}
