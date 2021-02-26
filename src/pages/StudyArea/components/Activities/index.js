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
  const [disabledButton, setDisabledButton] = useState(false);
  const [activityType, setType] = useState("theory");
  const [title, setTitle] = useState();
  const [wordingText, setWordingText] = useState();
  const [sample, setSample] = useState();
  const [link, setLink] = useState();

  function verifyToDisablaButton(currentTopicIndex, currentChapterIndex, list) {
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

  function updateActivityData(name, wording, example, youtubeLink) {
    setTitle(name);
    setWordingText(wording);
    setSample(example);
    setLink(youtubeLink);
  }

  function markActivityAsDone(theoryDones, exerciseDones) {
    if (
      (exerciseDones && exerciseDones.length > 0) ||
      (theoryDones && theoryDones.length > 0)
    ) {
      setMarkedDone(true);
    } else {
      setMarkedDone(false);
    }
  }

  useEffect(() => {
    if (options) {
      const { currentTopicIndex, currentChapterIndex, list } = options;
      verifyToDisablaButton(currentTopicIndex, currentChapterIndex, list);
    }

    if (currentActivity) {
      const {
        name,
        wording,
        example,
        exerciseDones,
        theoryDones,
        youtubeLink,
      } = currentActivity;

      if (!exerciseDones) {
        setType("theory");
      } else {
        setType("exercise");
      }

      updateActivityData(name, wording, example, youtubeLink);

      markActivityAsDone(theoryDones, exerciseDones);
    }
  }, [currentActivity]);

  function changeTopicOrChapter() {
    const { currentTopicIndex, currentChapterIndex, list } = options;

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
          <ClassVideo link={link} />
        ) : (
          <ExerciseWording
            name={title}
            wording={wordingText}
            example={sample}
          />
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
