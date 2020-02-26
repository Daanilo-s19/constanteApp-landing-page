import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 58px;
  display: flex;
  justify-content: space-around;

  .be-constante {
    z-index: 2;
    margin-top: 83px;
    span {
      margin-bottom: 16px;
    }
    img {
      width: 98px;
      height: 98px;
      margin-left: 20px;
      transform: scale(1);
      animation: pulse 2s infinite;
      cursor: pointer;

      &:hover {
        transform: scale(1);
        animation: pulse 4s;
      }
    }
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
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      opacity: 0.6;
      color: #ffff;
    }
  }

  -webkit-animation: fadeIn 3s ease-in-out;
  -moz-animation: fadeIn 3s ease-in-out;
  -o-animation: fadeIn 3s ease-in-out;
  animation: fadeIn 3s ease-in-out;
`;
