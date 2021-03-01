import styled from "styled-components";
import tipography from "../../../../config/typography";
import MEDIA_MAX from "../../../../config/media";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-image: linear-gradient(to bottom, #e4d04d, #f2e799);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 80px;
  z-index: 0;
  position: relative;
  margin-bottom: 100px;

  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    :hover {
      cursor: pointer;
    }
  }

  svg {
    font-size: 30px;
    color: #fff;
  }

  & > h1 {
    margin: 20px 0;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
  & > p {
    color: #383838;
    text-align: center;
  }

  ${MEDIA_MAX} {
    & > h1 {
      margin: 30px 15px;
      font-size: 20px;
    }
    & > p {
      margin-bottom: 30px;
    }
    .back-button {
      top: 10px;
      left: 10px;
    }
  }
`;

export const ContainerUserProgress = styled.div`
  width: 85%;
  height: 100px;
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  font-family: ${tipography.Roboto};
  border-radius: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  bottom: -50px;
  z-index: 1;

  button {
    width: 160px;
    margin: auto 20px;
    font-size: 15px;
  }

  ${MEDIA_MAX} {
    flex-direction: column;
    height: 140px;
    bottom: -70px;
    padding-top: 10px;
    width: 100%;
    border-radius: 0px;
    button {
      width: 85%;
      padding: 8px;
      margin: 5px;
      font-size: 15px;
    }
  }
`;

export const ContainerImgAndProgress = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;
  margin-left: 15px;
  & > :first-child {
    * {
      border-radius: 50%;
    }
  }
  p {
    margin-bottom: 10px;
    font-size: 15px;
  }
  > div {
    margin-left: 15px;
  }

  ${MEDIA_MAX} {
    width: 100%;
    justify-content: center;
    margin-left: 0px;
    margin: 5px;

    p {
      margin-right: 8px;
    }
    > div > div {
      width: 90%;
    }
  }
`;

export const temp = 0;
