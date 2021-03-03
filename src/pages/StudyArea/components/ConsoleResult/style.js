import styled from "styled-components";
import Color from "../../../../config/colors";

export const Container = styled.li`
  padding: 10px;
`;

export const Title = styled.div`
  display: flex;
  padding-bottom: 5px;
  h3 {
    font-weight: 700;
  }
  span {
    color: ${(props) =>
      props.state === "passed" ? Color.lightGreen : Color.red};
  }
`;

export const Message = styled.div`
  p {
    font-weight: 400;
    margin-bottom: 5px;
  }
`;
