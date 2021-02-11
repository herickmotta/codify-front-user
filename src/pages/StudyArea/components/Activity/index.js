/* eslint-disable */
import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import Exercise from "../Exercise";
import Button from "../../../../components/Button";
import ClassVideo from "../ClassVideo";
import EndLesson from "./style";

export default function Activity({
  currentLesson,
  markedDone,
  setMarkedDone,
  concludeLesson,
  next
}) {
  useEffect(() => {
    if (
      (!markedDone &&
        (
          currentLesson.exerciseDones &&
          currentLesson.exerciseDones.length > 0
        ) || (
          currentLesson.theoryDones && 
          currentLesson.theoryDones.length > 0
        )
      )
    ) {
      setMarkedDone(true);
    } else if (
      (markedDone &&
        (
          currentLesson.exerciseDones &&
          currentLesson.exerciseDones.length === 0
        ) || (
          currentLesson.theoryDones && 
          currentLesson.theoryDones.length === 0
        )
      )
    ) {
      setMarkedDone(false);
    }
  }, [currentLesson]);

  return (
    <>
      {currentLesson && currentLesson.youtubeLink ? (
        <ClassVideo link={currentLesson.youtubeLink} />
      ) : (
        <Exercise name={`Exercicio ${currentLesson.id}`} />
      )}
      <EndLesson checked={markedDone}>
        <FormControlLabel
          control={
            <Checkbox
              checked={markedDone}
              onChange={() => {
                setMarkedDone(!markedDone);
                concludeLesson(currentLesson);
              }}
            />
          }
          label="Marcar como concluido"
        />
        <Button text="Avancar >>" onClick={next} />
      </EndLesson>
    </>
  );
}
