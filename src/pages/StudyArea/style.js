import styled from "styled-components";
import Colors from "../../config/colors";
import tipography from "../../config/typography";

export const Content = styled.nav`
  border-bottom: 1px solid ${Colors.lightGray};
  text-align: center;
  padding: 3vh 0;

  ul {
    display: flex;
    justify-content: center;

    & > :last-child > :last-child {
      display: none;
    }
  }
`;

export const Container = styled.section`
  background-color: ${Colors.darkGray};
  height: 100vh;

  * {
    font-family: ${tipography.Roboto};
    font-weight: 700;
  }
`;

export const Menu = styled.ul`
  margin: 0 auto;
  display: ${(props) => (props.openMenu ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 35%;
  width: 30%;
  background: black;
  padding: 10px 20px;
  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 27px;

  h2 {
    color: ${Colors.white};
    font-weigth: 700;
    font-size: 23px;
    margin: 10px 0;
  }
`;
