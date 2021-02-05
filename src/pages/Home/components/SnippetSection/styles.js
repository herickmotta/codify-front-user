import styled from "styled-components";
import tipography from "../../../../config/typography";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 20px 0;
  font-family: ${tipography.Roboto};
  & > h1 {
    margin: 20px 0;
    font-size: 22px;
  }
`;

export const List = styled.ul`
  display: flex;
  & > div {
    margin: 0 20px;
  }
  & :first-child {
    margin-left: 0;
  }

  & :last-child {
    margin-right: 0;
  }
`;
