import styled from "styled-components";
import Colors from "../../config/colors";
import tipography from "../../config/typography";

export const Content = styled.nav`
  background-color: ${Colors.lightBlack};
  text-align: center;
  padding: 2vh 0;

  ul {
    display: flex;
    justify-content: center;
    height: 44px;

    & > :last-child > :last-child {
      display: none;
    }
  }
`;

export const Container = styled.section`
  background-color: ${Colors.darkGray};
  min-height: 100vh;
  font-family: ${tipography.Roboto};
`;

export const Menu = styled.ul`
  display: ${(props) => (props.openMenu ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 30%;
  width: 40%;
  background-color: ${Colors.blackMenu};
  padding: 10px 20px;
  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 27px;
  overflow: auto;
  max-height: calc(50% - 76px);
  z-index: 2;

  h2 {
    color: ${Colors.white};
    font-weigth: 700;
    font-size: 23px;
    margin: 10px 0;
  }
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.greyScrollBar};
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${Colors.lightGray};
  }

  @media (max-width: 800px) {
    width: 100%;
    left: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    max-height: calc(60% - 76px);
  }
`;
