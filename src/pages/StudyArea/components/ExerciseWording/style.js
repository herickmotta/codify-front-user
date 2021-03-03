import styled from "styled-components";
import Color from "../../../../config/colors";

const Container = styled.aside`
  flex-grow: 1;
  color: ${Color.lightGray};
  font-size: 18px;
  padding-right: 2%;

  h1 {
    font-size: 35px;
    padding-bottom: 35px;
    color: ${Color.white};
    font-weight: 700;
  }
  h3 {
    font-size: 20px;
    color: ${Color.white};
    font-weight: 700;
    padding: 40px 0 20px;
  }
`;

export default Container;
