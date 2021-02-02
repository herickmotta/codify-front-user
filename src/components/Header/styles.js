import styled from "styled-components";
import Tipografy from "../../config/typography";

export const Container = styled.div`
  width: 100vw;
  height: 90px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  img{
    height: auto;
    cursor:pointer;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  font-size: 18px;
`
export const LogoBox = styled.div`
  img{
    max-height: 40px;
  }
`;

export const Nav = styled.nav`
  font-family: ${Tipografy.Roboto};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  a{
    padding: 10px;
  }
  a:hover{
    opacity: 50%;
  }
`;
export const AvatarBox = styled.div`
  height: 100%;
  img{
    border-radius: 50%;
    height: 100%;
  }
`;

