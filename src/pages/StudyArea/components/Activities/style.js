import styled from "styled-components";
import Colors from "../../../../config/colors";

export const EndActivity = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;

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
  padding: 4% ${(props) => (props.type !== "theory" ? "1% 0 3%" : "0")};
  width: ${(props) => (props.type !== "theory" ? "40%" : "60%")};
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.type === "theory" ? "flex-start" : "center"};
  height: calc(96vh - 120px);
`;
