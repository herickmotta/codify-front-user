import styled from "styled-components";
import Colors from "../../../../config/colors";

export const EndActivity = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5%;

  button {
    font-size: 19px;
    width: auto;
    padding: 10px 40px;
    margin-bottom: 0;
  }
  span {
    color: ${(props) => (props.checked ? Colors.lightGreen : Colors.lightGray)};
    font-size: 19px;
  }
`;

export const Box = styled.article`
  margin: 0 ${(props) => (props.type !== "theory" ? "0 0 3%" : "auto")};
  width: ${(props) => (props.type !== "theory" ? "40%" : "60%")};
`;

export const CodeEditor = styled.main`
  background-color: red;
  width: 60%;
`;

export const Container = styled.section`
  display: flex;
  height: calc(94% - 120px);
  padding-top: 4%;
`;
