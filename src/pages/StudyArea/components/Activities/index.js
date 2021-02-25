import React, { useEffect, useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import ExerciseWording from "../ExerciseWording";
import Button from "../../../../components/Button";
import ClassVideo from "../ClassVideo";
import CodeEditor from "../CodeEditor";
import { Container, Box, EndActivity } from "./style";

export default function Activity({
  currentActivity,
  activityIndex,
  setActivity,
  markedDone,
  setMarkedDone,
  concludeActivity,
  topicActivities,
  options,
  changeTopic,
}) {
  const {
    name,
    wording,
    example,
    exerciseDones,
    theoryDones,
    youtubeLink,
  } = currentActivity;
  const { currentTopicIndex, currentChapterIndex, list } = options;
  const [disabledButton, setDisabledButton] = useState(false);
  const [activityType, setType] = useState("theory");

  useEffect(() => {
    if (options) {
      if (topicActivities && options && currentActivity) {
        const lastChapter = list.length - 1;
        const lastTopic = list[currentChapterIndex].chapterData.length - 1;
        const lastActivity = topicActivities.length - 1;

        if (
          currentChapterIndex === lastChapter &&
          currentTopicIndex === lastTopic &&
          lastActivity === activityIndex
        ) {
          setDisabledButton(true);
        } else {
          setDisabledButton(false);
        }
      }
    }
  }, [currentActivity]);

  useEffect(() => {
    if (currentActivity) {
      if (
        (exerciseDones && exerciseDones.length > 0) ||
        (theoryDones && theoryDones.length > 0)
      ) {
        setMarkedDone(true);
      } else {
        setMarkedDone(false);
      }
    }
  }, [currentActivity]);

  useEffect(() => {
    if (!exerciseDones) {
      setType("theory");
    } else {
      setType("exercise");
    }
  }, [currentActivity]);

  function changeTopicOrChapter() {
    const topicsQuantity = list[currentChapterIndex].chapterData.length;
    const nextChapterIndex = currentChapterIndex + 1;
    const nextTopicIndex = currentTopicIndex + 1;
    let nextChapterId;
    let nextTopicId;

    if (nextTopicIndex >= topicsQuantity) {
      nextChapterId = list[nextChapterIndex].id;
      nextTopicId = list[nextChapterIndex].chapterData[0].id;
    } else {
      nextTopicId = list[currentChapterIndex].chapterData[nextTopicIndex].id;
      nextChapterId = list[currentChapterIndex].id;
    }

    changeTopic(nextChapterId, nextTopicId);
  }

  function next() {
    const nextIndex = activityIndex + 1;

    if (nextIndex >= topicActivities.length) {
      changeTopicOrChapter();
    } else {
      setActivity({
        data: topicActivities[nextIndex],
        index: nextIndex,
      });
    }
  }

  return (
    <Container>
      <Box type={activityType}>
        {activityType === "theory" ? (
          <ClassVideo link={youtubeLink} />
        ) : (
          <ExerciseWording name={name} wording={wording} example={example} />
        )}
        <EndActivity checked={markedDone}>
          <FormControlLabel
            control={
              <Checkbox
                checked={markedDone}
                onChange={() => {
                  setMarkedDone(!markedDone);
                  concludeActivity(currentActivity);
                }}
              />
            }
            label="Marcar como concluido"
          />
          {!disabledButton && <Button text="Avancar >>" onClick={next} />}
        </EndActivity>
      </Box>
      {activityType !== "theory" && (
        <CodeEditor currentActivity={currentActivity} />
      )}
    </Container>
  );
}
