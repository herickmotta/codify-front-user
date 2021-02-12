import styled from "styled-components";
import Colors from "../../../../config/colors";

const EndLesson = styled.footer`
  margin: 0 auto;
  margin-top: 1.5vh;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 19px;
    width: auto;
    padding: 10px 40px;
  }
  span {
    color: ${(props) => (props.checked ? Colors.green : Colors.lightGray)};
    font-size: 19px;
  }
`;

export default EndLesson;
