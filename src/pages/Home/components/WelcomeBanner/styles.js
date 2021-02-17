import styled from "styled-components";
import colors from "../../../../config/colors";
import tipography from "../../../../config/typography";

const Banner = styled.div`
  background: ${colors.blue};
  width: 100%;
  padding: 25px 20px;
  color: ${colors.white};
  font-family: ${tipography.Roboto};
  letter-spacing: 1.2px;
  font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
  span {
    font-weight: bold;
  }
  div {
    margin-bottom: 4px;
  }
`;

export default Banner;
