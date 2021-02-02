import styled from "styled-components";
import tipography from "../../../../config/typography";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: ${tipography.Roboto};
  padding: 20px 40px;
  & > h1 {
    margin: 20px 0;
    font-size: 22px;
  }
`;

export const CardsList = styled.ul`
  display: flex;
  & > div {
    margin: 0 20px;
  }
  & :first-child {
    margin-left: 0;
  }
`;
