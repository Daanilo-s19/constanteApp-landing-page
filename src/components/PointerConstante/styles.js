import styled from "styled-components";
import { Medium, Small } from "../../utils/styles";
export const Container = styled.div`
  margin-top: 83px;
  width: 100%;

  display: flex;
  margin-top: -90px;
  flex-direction: column;
  padding: 0 7%;
  margin-bottom: 136px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    margin-bottom: 16px;
    opacity: 0.6;
    color: #ffff;
  }
  img {
    width: 98px;
    height: 98px;
    margin-left: 18px;
    transform: scale(1);
    animation: pulse 2s infinite;
    cursor: pointer;

    &:hover {
      transform: scale(1);
      animation: pulse 4s;
    }
  }

  @media (max-width: ${Medium}) {
    align-items: center;
    top: 430px;
  }
  @media (max-width: ${Medium}) {
    margin-top: -40px;
    span {
      display: none;
    }
  }
`;
