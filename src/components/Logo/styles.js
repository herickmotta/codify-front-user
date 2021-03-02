import styled from "styled-components";
import typography from "../../config/typography";
import colors from "../../config/colors";

export const Title = styled.h1`
  font-family: ${typography.ZillaSlabHighlight};
  color: ${colors.white};
  font-size: 116px;
  letter-spacing: 0.05em;
  line-height: 139px;

  @media (max-width: 500px) {
    font-size: 111px;
  }
`;

export const SubTitle = styled.h2`
  font-family: ${typography.Orienta};
  color: ${colors.white};
  font-size: 34px;
  line-height: 41px;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

export const Container = styled.div`
  margin-bottom: 60px;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
