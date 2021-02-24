import styled from "styled-components";
import Colors from "../../../../config/colors";

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 15px;
  cursor: pointer;
  color: ${(props) => (props.current ? Colors.white : Colors.lightGray)};
  font-weigth: 300;
  font-size: 20px;

  svg {
    margin-right: 10px;
    width: 18px;
    heigth: 18px;
  }
`;

export default Container;
