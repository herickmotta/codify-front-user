import styled from "styled-components";
import Colors from "../../../../config/colors";
import Typography from "../../../../config/typography";
import MEDIA_MAX from "../../../../config/media";

export const Container = styled.header`
  width: 100%;
  height: 21.5rem;
  display: flex;
  justify-content: center;

  /* position: absolute; */
  /* left: 0px;
  top: 119px; */
  margin-top: 80px;

  background-color: ${Colors.blueBanner};
  ${MEDIA_MAX} {
    padding-top: 20px;
  }
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.5rem;
  height: 5.5rem;

  /* border-radius: 100%; */
  border: 4px solid ${Colors.white};
  box-sizing: border-box;
  border-radius: 100%;

  div {
    /* width: 10rem !important; */
    border-radius: 100%;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 40%;
  height: 60%;

  margin-top: 2rem;

  ${MEDIA_MAX} {
    margin-top: 1rem;
  }
`;

export const UserName = styled.p`
  font-family: ${Typography.Roboto};
  font-weight: bold;
  font-size: 2.75rem;
  line-height: 3.25rem;

  text-align: center;

  color: ${Colors.white};

  ${MEDIA_MAX} {
    font-size: 1.75rem;
    line-height: 2.25rem;

    padding-bottom: 40px;
    margin-bottom: 15px;
  }
`;
