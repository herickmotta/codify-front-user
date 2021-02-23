import styled from "styled-components";
import Colors from "../../../../config/colors";

export const Container = styled.header`
  width: 100%;
  display: flex;
  background-color: ${Colors.black};
  font-size: 25px;
  padding: 15px 20px;
`;

export const Topics = styled.div`
  width: 30%;
  color: ${Colors.white};
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  left: 35%;
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
    margin-left: 0.1em;
  }
`;

export const Icon = styled.div`
  background-color: ${Colors.lightGray};
  font-size: 36px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
