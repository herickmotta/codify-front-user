import styled from "styled-components";
import typography from "../../config/typography";
import colors from "../../config/colors";

const Container = styled.div`
  font-family: ${typography.Roboto};
  line-height: 26px;
  font-size: 21px;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-right: 0;
  div {
    margin-left: 10px;
    text-align: start;
  }
  p {
    color: ${colors.lightGray};
    font-size: 18px;
  }
  h4 {
    color: #008e16;
  }
  svg {
    margin: 5px;
    color: #008e16;
    font-size: 45px;
  }
`;

export default Container;
