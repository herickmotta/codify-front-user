import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import Exercise from "../Exercise";
import Button from "../../../../components/Button";
import ClassVideo from "../ClassVideo";
import EndLesson from "./style";

export default function Activity({ currentLesson, concludeLesson }) {
  const [markedDone, setMarkedDone] = useState(currentLesson.done);

  useEffect(() => {
    setMarkedDone(currentLesson.done);
  }, [currentLesson.done]);

  return (
    <>
      {currentLesson.type === "teoria" ? (
        <ClassVideo link={currentLesson.link} />
      ) : (
        <Exercise name={currentLesson.name} />
      )}
      <EndLesson checked={markedDone}>
        <FormControlLabel
          control={
            <Checkbox
              checked={markedDone}
              onChange={() => {
                setMarkedDone(!markedDone);
                concludeLesson();
              }}
            />
          }
          label="Marcar como concluido"
        />
        <Button text="Avancar >>" />
      </EndLesson>
    </>
  );
}
