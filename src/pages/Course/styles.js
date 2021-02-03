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
  background-image: linear-gradient(to bottom, #e4d04d, #f2e799);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 80px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
  font-family: ${tipography.Roboto};
  border-radius: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  bottom: -50%;

  button {
    width: 120px;
    margin-right: 15px;
  }
`;

export const ContainerImgAndProgress = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  width: 40%;

  img {
    border-radius: 50%;
    height: 10%;
    width: 10%;
  }
`;

export const temp = 0;
