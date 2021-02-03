import styled from "styled-components";
import colors from "../../../../config/colors";
import tipography from "../../../../config/typography";

export const Card = styled.div`
  height: 257px;
  width: 192px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  font-family: ${tipography.Roboto};
`;

export const ImageBox = styled.div`
  height: 50%;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DescriptionBox = styled.div`
  height: 50%;
  width: 100%;
  padding: 10px;
  h1 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    color: ${colors.gray};
  }
`;
