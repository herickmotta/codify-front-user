import styled from "styled-components";
import Colors from "../../config/colors";
import typography from "../../config/typography";

const FormsContainer = styled.form`
  width: 100%;
  border-radius: 10px;
  background-color: ${Colors.white};
  padding: 40px 25px;
  text-align: center;
  max-width: 500px;
  min-width: 320px;
  font-size: 21px;
  font-family: ${typography.Roboto};

  & > * {
    margin-bottom: 15px;
  }
  a {
    display: block;
    text-decoration-line: underline;
    color: ${Colors.gray};
    font-size: 21px;
    margin-top: 16px;
  }
  p {
    color: ${(props) => props.color || Colors.red};
    font-weight: bold;
  }

  @media (max-width: 500px) {
    border-radius: 0;
  }
`;

export default FormsContainer;
