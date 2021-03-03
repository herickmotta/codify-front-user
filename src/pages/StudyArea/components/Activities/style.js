import styled from "styled-components";
import Colors from "../../../../config/colors";

export const EndActivity = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;

  * {
    font-size: 19px;
    line-height: 20px;
  }
  button {
    width: auto;
    padding: 10px 40px;
    margin-bottom: 0;
  }
  span {
    color: ${(props) => (props.checked ? Colors.lightGreen : Colors.lightGray)};
  }

  @media (max-width: 900px) {
    padding: 10% 2%;

    * {
      font-size: 15px;
    }

    button {
      padding: 5px 30px;
    }
  }
`;

export const Box = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4% ${(props) => (props.type !== "theory" ? "2% 0 3%" : "0")};
  width: ${(props) => (props.type !== "theory" ? "40%" : "60%")};
  min-height: calc(568px - 109px - 4vh);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.type === "theory" ? "flex-start" : "center"};
  height: calc(96vh - 120px);

  @media (max-width: 800px) {
    flex-direction: column;
    height: calc(100% - 120px);
  }
`;
