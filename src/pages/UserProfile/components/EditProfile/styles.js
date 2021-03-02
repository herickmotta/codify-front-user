import styled from "styled-components";
import Colors from "../../../../config/colors";
import Typography from "../../../../config/typography";
import MEDIA_MAX from "../../../../config/media";

export const Container = styled.form`
  width: 65%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  position: absolute;
  left: 17.5%;
  top: 21rem;

  background-color: ${Colors.white};
  border-radius: 1.5rem;

  padding: 59px 20px 39px 57px;
  ${MEDIA_MAX} {
    left: 0%;
    top: 18rem;
    width: 100%;
    border-radius: 0rem;

    padding: 30px 25px 20px 25px;

    flex-direction: column-reverse;

    button {
      font-size: 18px;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Label = styled.p`
  width: 100%;
  font-family: ${Typography.Roboto};
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  margin-bottom: 5px;
  margin-top: ${(props) => props.marginTop || "0px"};

  text-align: left;

  color: ${Colors.editProfileGrey};
`;

export const ErrorMessage = styled(Label)`
  text-align: center;
  font-size: 18px;
  color: ${Colors.red};

  margin-top: 15px;
`;

export const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  div {
    margin-top: 8%;
    width: 10rem !important;
    height: 10rem !important;
    border-radius: 100%;
  }
  ${MEDIA_MAX} {
    margin-bottom: 40px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 5%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;
