import styled from "styled-components";
import colors from "../../../../config/colors";
import MEDIA_MAX from "../../../../config/media";
import typography from "../../../../config/typography";

export const Snippet = styled.div`
  height: 210px;
  max-width: 950px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  font-family: ${typography.Roboto};
  background: ${colors.white};

  ${MEDIA_MAX} {
    flex-direction: column;
    height: 400px;
  }
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 30%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
    width: auto;
    height: 100%;
  }

  ${MEDIA_MAX} {
    width: 100%;
    height: 50%;
  }
`;

export const DescriptionBox = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 20px;
  h1 {
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: bold;
  }
  p {
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: ${colors.gray};
    overflow: ellipsis;
  }
  a {
    color: ${colors.gray};
    font-weight: bold;
    font-size: 16px;
    opacity: 70%;
  }
  ${MEDIA_MAX} {
    width: 100%;
    height: 30%;
  }
`;

export const ButtonBox = styled.div`
  width: 28%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin-right: 10px;
  font-weight: bold;
  button {
    margin: 0;
    padding: 16px;
    font-size: 18px;
    cursor: pointer;
  }
  ${MEDIA_MAX} {
    width: 100%;
    height: 20%;
    padding: 10px;
  }
`;
