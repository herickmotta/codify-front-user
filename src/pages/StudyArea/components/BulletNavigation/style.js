/* eslint-disable */
import styled from "styled-components";
import Colors from "../../../../config/colors";

const Container = styled.li`
  display: flex;

  & > :first-child {
    color: ${(props) => props.completed
      ? Colors.lightGreen
      : (props.clicked ? Colors.white : Colors.lightGray)
    };

    :hover {
      cursor: pointer;
    }
  }
  & > :last-child {
    border-top: 2px solid
     ${(props) => props.completed
        ? Colors.lightGreen
        : (props.clicked ? Colors.white : Colors.lightGray)
      }
    ;
    width: 100px;
    margin-top: 12.5px;
  }
  p {
    margin-top: 5px;
  }
`;
export default Container;
