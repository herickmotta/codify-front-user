import styled from "styled-components";
import Color from "../../../../config/colors";

const Container = styled.aside`
  color: ${Color.lightGray};
  flex-grow: 1;
  min-width: 320px;
  font-size: 20px;
  height: calc(98.5% - 40px);

  h1 {
    font-size: 40px;
    margin-bottom: 35px;
    color: ${Color.white};
  }
`;

export default Container;
