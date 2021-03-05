import styled from "styled-components";
import Colors from "../../config/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Colors.backgroundGray};
`;

export const MainContent = styled.main`
  width: 90%;
  flex-grow: 1;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SpinnerBox = styled.div`
  width: 100%;
  padding-top: 15rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
