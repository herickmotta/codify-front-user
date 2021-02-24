import styled from "styled-components";
import Colors from "../../../../config/colors";

export const Container = styled.main`
  width: 60%;
  padding-left: 1%;

  * {
    font-size: 17px;
  }
`;

export const ConsoleBox = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  height: calc(40% - 37px);
  padding: 20px;
  color: ${Colors.white};
  overflow: auto;

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
`;

export const HeaderEditor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  color: ${Colors.white};

  * {
    font-size: 15px;
  }

  button {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 10px 50px;
    background-color: ${Colors.lightGrayButton};
    border-radius: 10px;
    line-height: 17px;
  }
`;
