import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

const Container = styled.button`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.color || colors.blue};
  font-family: ${typography.Roboto};
  font-weigth: 700;
  font-size: 24px;
  color: ${(props) => props.textColor || colors.white};
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 15px;

  margin-right: ${(props) => props.marginRight || "0px"};

  border: 2px solid ${colors.blue};
`;

export default Container;
