import React from "react";
import Editor from "@monaco-editor/react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoPlayForwardOutline } from "react-icons/io5";
import Button from "../../../../components/Button";
import { Container, ConsoleBox, HeaderEditor } from "./style";

const solutionButton = (
  <p>
    Ver solucao <HiOutlineLightBulb />
  </p>
);
const testButton = (
  <p>
    Rodar testes <IoPlayForwardOutline />
  </p>
);

export default function CodeEditor() {
  const defaultCode = `function minhaFuncao() {
        // Insira seu codigo aqui
}`;
  const defaultTest = "Rode os testes para verificar seu codigo";

  return (
    <Container>
      <HeaderEditor>
        <h3>Seu codigo</h3>
        <Button text={solutionButton} width="auto" />
      </HeaderEditor>
      <Editor
        height="calc(60% - 37px)"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={defaultCode}
      />
      <HeaderEditor>
        <h3>Console</h3>
        <Button text={testButton} width="auto" />
      </HeaderEditor>
      <ConsoleBox>{defaultTest}</ConsoleBox>
    </Container>
  );
}
