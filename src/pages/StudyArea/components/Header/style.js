import styled from "styled-components";
import Colors from "../../../../config/colors";

export const Container = styled.header`
  width: 100%;
  display: flex;
  background-color: ${Colors.black};
  font-size: 25px;
  padding: 15px 9px;
  text-align: center;
`;

export const Topics = styled.nav`
  width: 30%;
  margin: 0 auto;

  div {
    color: ${Colors.white};
    background-color: ${Colors.black};
    border: none;
  }
  span {
    display: none;
  }
  svg {
    width: 30px;
    height: 30px;
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
