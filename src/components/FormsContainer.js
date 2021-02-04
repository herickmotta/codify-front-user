import styled from "styled-components";
import colors from "../config/colors";
import typography from "../config/typography";

const FormsContainer = styled.form`
  width: 30%;
  border-radius: 10px;
  background-color: ${colors.white};
  margin-top: 60px;
  padding: 40px 25px;
  text-align: center;

  a {
    display: block;
    text-decoration-line: underline;
    color: ${colors.grey};
    font-family: ${typography.Roboto};
    font-size: 21px;
    line-height: 25px;
    margin-top: 16px;
  }
`;

export default FormsContainer;
