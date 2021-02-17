import styled from "styled-components";
import tipography from "../../../../config/typography";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  margin: 20px 0;
  font-family: ${tipography.Roboto};
  & > h1 {
    margin: 20px 0;
    font-size: calc(20px + (32 - 20) * ((100vw - 300px) / (1600 - 300)));
  }
`;

export const CardsList = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-shrink: 0;
`;
