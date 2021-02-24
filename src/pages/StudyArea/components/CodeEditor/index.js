import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { runTests } from "@bootcamp-ra/mocha-as-promised";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoPlayForwardOutline } from "react-icons/io5";
import ConsoleResult from "../ConsoleResult";
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
const defaultCode = `function minhaFuncao() {
  // Insira seu codigo aqui
}`;
const defaultConsole = "Rode os testes para verificar seu codigo";

export default function CodeEditor({ currentActivity }) {
  const [userCode, setUserCode] = useState();
  const [testResult, setResult] = useState();

  useEffect(() => {
    setResult(null);
    setUserCode(defaultCode);
  }, [currentActivity]);

  async function main(e) {
    e.preventDefault();

    const testCode = `
      describe('minhaFuncao', () => {
        it('Retorna 10 quando passado 10', () => {
          const expected = 10;

          const result = minhaFuncao(expected);

          expect(result).equal(expected);
        });
        it('Retorna 55 quando passado 55', () => {
          const param = 55;

          const result = minhaFuncao(param);

          expect(result).equal(param);
        });
      });
    `;
    const result = await runTests(userCode, testCode);
    setResult(result);
  }
  console.log(testResult);
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
        value={userCode}
        onChange={setUserCode}
      />

      <HeaderEditor>
        <h3>Console</h3>
        <Button text={testButton} width="auto" onClick={main} />
      </HeaderEditor>

      <ConsoleBox>
        {!testResult && defaultConsole}
        {testResult &&
          testResult.suites[0].map((r, i) => (
            <ConsoleResult test={r} state={r.state} index={i} key={r.id} />
          ))}
      </ConsoleBox>
    </Container>
  );
}
