import styled from "styled-components";
import Colors from "../../../../../../config/colors";
import Typography from "../../../../../../config/typography";

export const EditLabel = styled.label`
  opacity: 100% !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  color: ${Colors.editBlue};
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 36px;
  font-family: ${Typography.Roboto};
  cursor: pointer;
  font-weight: bold;
  p {
    font-size: 18px;
  }
`;

export const SpinnerBox = styled.label`
  opacity: 100% !important;
  width: 100%;
  height: 100%;
  top: 22px;
  left: 37px;
  position: absolute;
  z-index: 3;
  font-size: 80px;
  text-align: center;
`;
