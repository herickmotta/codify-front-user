import styled from "styled-components";
import Colors from "../../../../config/colors";

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.5em 1em;
  cursor: pointer;
  color: ${(props) => (props.current ? Colors.white : Colors.lightGray)};
  font-weigth: 300;
  font-size: 20px;

  svg {
    margin-right: 0.5em;
    width: 18px;
    heigth: 18px;
  }
`;

export default Container;
