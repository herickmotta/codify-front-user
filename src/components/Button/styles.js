import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

const Container = styled.button`
  width: 100%;
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
