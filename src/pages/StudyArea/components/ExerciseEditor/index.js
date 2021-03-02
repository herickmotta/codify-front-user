import React, { useState } from "react";
import CodeEditor from "../CodeEditor";
import SolutionEditor from "../SolutionEditor";
import Container from "./style";

export default function ExerciseEditor({ currentActivity }) {
  const [answer, setAnswer] = useState(false);

  return (
    <Container>
      {answer ? (
        <SolutionEditor
          currentActivity={currentActivity}
          setAnswer={setAnswer}
        />
      ) : (
        <CodeEditor currentActivity={currentActivity} setAnswer={setAnswer} />
      )}
    </Container>
  );
}
