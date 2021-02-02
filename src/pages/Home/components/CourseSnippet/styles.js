import styled from "styled-components";
import colors from "../../../../config/colors";
import tipography from "../../../../config/typography";

export const Snippet = styled.div`
  height: 120px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  font-family: ${tipography.Roboto};
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 35%;
  object-fit: cover;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DescriptionBox = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    font-weight: bold;
  }
  p {
    color: ${colors.gray};
  }
  div {
    color: ${colors.gray};
    font-weight: bold;
    font-size: 14px;
    opacity: 70%;
  }
`;

export const ButtonBox = styled.div``;
