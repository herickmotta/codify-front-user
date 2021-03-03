import styled from "styled-components";
import Colors from "../../../../config/colors";

const HeaderEditor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  color: ${Colors.white};

  * {
    font-size: 15px;
  }
  button {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 10px 50px;
    background-color: ${Colors.lightGrayButton};
    border-radius: 10px;
    line-height: 17px;
  }

  @media (max-width: 800px) {
    padding: 0 5px 0 10px;

    button {
      padding: 5px 20px;
    }
  }
`;

export default HeaderEditor;
