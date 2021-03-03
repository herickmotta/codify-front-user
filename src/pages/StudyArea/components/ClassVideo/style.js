import styled from "styled-components";

export const YouTubePlayer = styled.iframe`
  display: flex;
  justify-content: center;
  width: 60vw;
  height: 33.75vw;
  min-width: 320px;
  min-height: 180px;

  @media (max-width: 800px) {
    width: 100vw;
    height: 56.25vw;
  }
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
