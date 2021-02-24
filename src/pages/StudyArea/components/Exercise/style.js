import styled from "styled-components";
import Color from "../../../../config/colors";

const Container = styled.aside`
  color: ${Color.lightGray};
  font-size: 18px;
  height: calc(96% - 42px);
  padding-right: 2%;

  h1 {
    font-size: 35px;
    padding-bottom: 35px;
    color: ${Color.white};
  }
`;

export default Container;
