import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

const Container = styled.button`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${colors.blue};
  font-family: ${typography.Roboto};
  font-weigth: 700;
  font-size: 24px;
  color: ${colors.white};
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 15px;
`;

export default Container;
