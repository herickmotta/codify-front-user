import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

const Container = styled.input`
  width: 100%;
  font-family: ${typography.Roboto};
  font-weigth: 700;
  font-size: 24px;
  padding: 14px 21px;
  border: 1px solid ${colors.lightGray};
  border-radius: 6px;
`;

export default Container;
