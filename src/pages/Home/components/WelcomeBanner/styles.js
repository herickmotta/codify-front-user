import styled from "styled-components";
import colors from "../../../../config/colors";
import tipography from "../../../../config/typography";

const Banner = styled.div`
  background: ${colors.lightBlue};
  width: 100%;
  padding: 20px 40px;
  color: ${colors.white};
  font-family: ${tipography.Roboto};
  letter-spacing: 1.2px;
  span {
    font-weight: bold;
  }
  div {
    margin-bottom: 4px;
  }
`;

export default Banner;
