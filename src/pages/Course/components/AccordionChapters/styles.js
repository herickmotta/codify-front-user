import styled from "styled-components";
import tipography from "../../../../config/typography";
import MEDIA_MAX from "../../../../config/media";

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
        h2 {
          font-weight: bold;
          font-size: 17px;
          display: inline;
        }
        p,
        span {
          display: inline;
        }
        span {
          margin: 5px;
        }
      }
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
        text-decoration: none;
      }

      svg {
        color: #76df92;
      }
    }
  }

  ${MEDIA_MAX} {
    padding-bottom: 10px;

    .accordion {
      width: 100%;
    }
    .item {
      align-items: center;
      flex-direction: column;
      text-align: center;
      p {
        font-size: 15px;
      }
    }
    .itemPanel {
      margin: 5px;
      svg {
        font-size: 18px;
      }
      p {
        font-size: 15px;
        width: 70%;
      }
      a {
        font-size: 8px;
      }
    }
  }
`;

export const temp = 0;
