import styled from "styled-components";
import Colors from "../../../../config/colors";

export const Container = styled.header`
  width: 100%;
  display: flex;
  aling-items: center;
  background-color: ${Colors.black};
  font-size: 25px;
  padding: 15px 20px;
`;

export const Topics = styled.div`
  width: 40%;
  color: ${Colors.white};
  display: flex;
  justify-content: space-evenly;
  aling-items: center;
  position: absolute;
  left: 30%;
  top: 25px;
  cursor: pointer;

  h1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  svg {
    transition: all 200ms linear;
    transform: ${(props) => (props.openMenu ? `rotate(180deg)` : `rotate(0)`)};
  }

  @media (max-width: 800px) {
    width: 60%;
    left: 25%;

    div {
      font-size: 46px;
    }
  }
`;

export const Icon = styled.div`
  background-color: ${Colors.lightGray};
  font-size: 46px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    font-size: 35px;
  }
`;
