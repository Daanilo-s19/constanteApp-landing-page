import styled from "styled-components";
import { Medium } from "../../utils/styles";
export const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin: 0 0 124px;

  @media (max-width: ${Medium}) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  img {
    margin-bottom: 40px;
  }

  strong {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #505052;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #8c8c8f;
  }
  @media (max-width: ${Medium}) {
    margin-bottom: 60px;
  }
`;
