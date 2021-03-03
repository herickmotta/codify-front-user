import styled from "styled-components";

const Container = styled.main`
  width: 60%;
  overflow: hidden;

  * {
    font-size: 17px;
  }

  @media (max-width: 800px) {
    width: 100%;
    font-size: inherit;

    button {
      padding: 10px 30px;
    }
    section {
      min-height: 400px;
    }
  }
`;

export default Container;
