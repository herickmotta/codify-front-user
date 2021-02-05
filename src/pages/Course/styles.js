import styled from "styled-components";
import tipography from "../../config/typography";

export const Container = styled.body`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
  font-family: ${tipography.Roboto};
`;

export const CointainerCourseText = styled.div`
  width: 100%;
  height: 200px;
  background-image: linear-gradient(to bottom, #e4d04d, #f2e799);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 80px;
  z-index: 0;
  position: relative;

  & > h1 {
    margin: 20px 0;
    font-size: 25px;
    font-weight: bold;
  }
  & > p {
    color: #383838;
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
`;

export const ContainerImgAndProgress = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;
  margin-left: 15px;

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }

  p {
    margin-bottom: 10px;
    font-size: 15px;
  }

  > div {
    margin-left: 15px;
  }
`;

export const ProgressBar = styled.div`
  height: 20px;
  margin: 10px;
  background: #eaeaea;
  padding: 0px;

  > div {
    width: 50%;
    background: #76df92;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const temp = 0;
