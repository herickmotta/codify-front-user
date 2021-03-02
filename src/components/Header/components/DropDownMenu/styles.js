import styled from "styled-components";
import Colors from "../../../../config/colors";
import Typography from "../../../../config/typography";

export const DropMenu = styled.nav`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isMenuDown ? "auto" : "0px")};
  width: 100%;
  position: absolute;
  top: 65px;
  left: 0;
  border-radius: 15px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: ${(props) =>
    props.isMenuDown ? "0px 5px 3px 2px rgba(0, 0, 0, 0.1)" : "0"};
  overflow: hidden;
  padding: 0 10px;
  background: ${Colors.white};
  & > button {
    padding: 10px;
    background: ${Colors.white};
    text-align: center;
    width: 100%;
    font-family: ${Typography.Roboto};
    border-bottom: solid 1px ${Colors.lightGray};
    cursor: pointer;
    color: "#262626";
  }
  & > :last-child {
    border: none;
  }
`;

export const temp = 0;
