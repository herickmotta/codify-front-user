import styled from "styled-components";
import colors from "../../../../config/colors";
import typography from "../../../../config/typography";

export const Snippet = styled.div`
  height: 160px;
  width: 656px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  font-family: ${typography.Roboto};
  background: ${colors.white};
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 30%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
    width: auto;
    height: 100%;
  }
`;

export const DescriptionBox = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 20px;
  h1 {
    font-weight: bold;
  }
  p {
    color: ${colors.gray};
  }
  a {
    color: ${colors.gray};
    font-weight: bold;
    font-size: 14px;
    opacity: 70%;
  }
`;

export const ButtonBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin-right: 10px;
  font-weight: bold;
  button {
    margin: 0;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
  }
`;
