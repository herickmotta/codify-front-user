import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { BsPencil } from "react-icons/bs";
import Button from "../../../../components/Button";
import HeaderEditor from "./style";

const solutionButton = (
  <p>
    Seu codigo <BsPencil />
  </p>
);

export default function SolutionEditor({ currentActivity, setAnswer }) {
  const [solution, setSolution] = useState();

  useEffect(() => {
    setSolution(currentActivity.solution);
  }, [currentActivity]);

  return (
    <>
      <HeaderEditor>
        <h3>Nossa solucao</h3>
        <Button
          text={solutionButton}
          width="auto"
          onClick={() => setAnswer(false)}
        />
      </HeaderEditor>

      <Editor
        height="calc(100% - 38px)"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={solution}
        onChange="null"
      />
    </>
  );
}
