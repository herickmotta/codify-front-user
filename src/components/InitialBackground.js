import styled from "styled-components";

const InitialBackground = styled.body`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url("http://www.solucionabm.org/wp-content/uploads/2015/02/blue-light-dot-background-2560x1600.jpg");
  background-position: center;
  backgroun-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px;
`;

export default InitialBackground;
