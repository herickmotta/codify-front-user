import styled from "styled-components";
import tipography from "../../../../config/typography";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${tipography.Roboto};

  .accordion {
    width: 80%;

    .item-heading {
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .item {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    h2 {
      font-weight: bold;
      font-size: 17px;
      display: inline;
    }
    > p {
      font-size: 15px;
      color: #383838;
    }

    .itemPanel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px;

      div {
        display: flex;
        align-items: center;
        p {
          margin: 10px;
        }
      }
      > a {
        font-size: 13px;
        margin-right: 8px;
      }

      svg {
        color: #76df92;
      }
    }
  }
`;

export const temp = 0;
