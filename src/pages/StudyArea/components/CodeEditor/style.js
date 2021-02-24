import styled from "styled-components";
import Color from "../../../../config/colors";

export const Container = styled.main`
  width: 60%;
  padding-left: 1%;

  * {
    font-size: 17px;
  }
  // h3 {
  //   font-size: 15px;
  //   padding: 10px 20px;
  // }
`;

export const ConsoleBox = styled.div`
  background-color: #1e1e1e;
  height: calc(40% - 37px);
  padding: 30px;
  color: ${Color.white};
`;

export const HeaderEditor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  color: ${Color.white};

  * {
    font-size: 15px;
  }

  button {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 10px 50px;
    background-color: #595959;
    border-radius: 10px;
    line-height: 17px;
  }
`;
