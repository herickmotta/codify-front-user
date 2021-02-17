import styled from "styled-components";
import colors from "../../../../config/colors";
import tipography from "../../../../config/typography";

export const Card = styled.div`
  min-width: 200px;
  max-height: 500px;
  min-height: 400px;
  max-width: 23%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  font-family: ${tipography.Roboto};
  background: ${colors.white};
`;

export const ImageBox = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StudyButton = styled.div`
  width: 100%;
  font-weight: bold;
  button {
    width: 100%;
    margin: 0;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const DescriptionBox = styled.div`
  height: 50%;
  width: 100%;
  padding: 20px 10px;
  h1 {
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: ${colors.gray};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
