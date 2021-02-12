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
