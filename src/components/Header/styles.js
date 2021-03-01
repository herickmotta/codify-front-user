import styled from "styled-components";
import Colors from "../../config/colors";
import Tipografy from "../../config/typography";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px 15px 20px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
  background: ${Colors.white};
  img {
    height: auto;
    cursor: pointer;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;
export const LogoBox = styled.div`
  img {
    max-height: 40px;
  }
`;

export const Nav = styled.nav`
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-family: ${Tipografy.Roboto};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  a {
    padding: 10px;
  }
  a:hover {
    opacity: 50%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    a {
      padding: 5px;
    }
  }
`;
export const LogOutButton = styled.div`
  width: 100%;
`;

export const AvatarBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-right: 20px;
  cursor: pointer;

  div {
    border-radius: 50%;
  }
`;

export const ArrowDropMenu = styled.div`
  stroke: currentcolor;
  fill: currentcolor;
  stroke-width: 20;
  font-size: 22px;
  color: rgb(61, 61, 61);
  margin-right: 5px;
  transform: ${(props) =>
    props.isMenuDown ? "rotate(180deg)" : "rotate(0deg)"};
`;
