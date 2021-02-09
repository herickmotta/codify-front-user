import styled from "styled-components";
import Colors from "../../config/colors";
import tipography from "../../config/typography";

export const Header = styled.header`
  width: 100%;
  display: flex;
  background-color: ${Colors.black};
  font-size: 25px;
  padding: 15px 9px;
  text-align: center;
`;

export const Topics = styled.nav`
  width: 40%;
  margin: 0 auto;
  div {
    color: ${Colors.white};
    background-color: ${Colors.black};
    border: none;
  }
  span {
    display: none;
  }
`;

export const Icon = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${Colors.lightGray};
  font-size: 36px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.nav`
  border-bottom: 1px solid ${Colors.lightGray};
  text-align: center;
  padding: 30px 0 25px;

  ul {
    display: flex;
    justify-content: center;

    & > :first-child {
      display: none;
    }
    & > :nth-child(2) {
      margin: 0;
    }
  }
  li {
    margin: 0 -8px;
  }
  div {
    background-color: ${Colors.white};
    width: 100px;
    height: 2px;
    margin-top: 12.5px;
  }
`;

export const Lesson = styled.main`
  margin: 0 auto;
  margin-top: 60px;
  width: 60%;
  height: 500px;
  background: white;
`;

export const EndLesson = styled.footer`
  margin: 0 auto;

  margin-top: 10px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    font-size: 19px;
    width: auto;
    cursor: pointer;
  }
  button {
    padding: 10px 40px;
  }
  input {
    margin-right: 5px;
  }
`;

export const Container = styled.section`
  background-color: ${Colors.gray};
  height: 100vh;

  * {
    font-family: ${tipography.Roboto};
    font-weight: 700;
    color: ${Colors.white};
  }
`;
