import styled from "styled-components";
import { Medium } from "../../utils/styles";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 85px;
  display: flex;
  justify-content: space-around;

  .image-iphone {
    width: auto;
    height: auto;
  }

  div {
    width: auto;
    height: auto;
    display: flex;
    margin-top: 58px;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 72px;
      color: #ffff;
    }
    label {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: #ffff;
    }
    @media (max-width: ${Medium}) {
      h1 {
        font-weight: 600;
        font-size: 33px;
        line-height: 49px;
      }
      label {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.09em;

        margin: 32px 0 0;
      }
    }
  }

  @media (max-width: ${Medium}) {
    margin-top: 40px;

    .image-iphone {
      display: none;
    }
  }

  -webkit-animation: fadeIn 3s ease-in-out;
  -moz-animation: fadeIn 3s ease-in-out;
  -o-animation: fadeIn 3s ease-in-out;
  animation: fadeIn 3s ease-in-out;
`;
