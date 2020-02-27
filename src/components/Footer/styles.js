import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: auto;
  background: #f0f0f5;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 80%;
    border-top: 1px solid #909090;
    text-align: center;
    padding-top: 24px;
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #8c8c8f;
    }
  }
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #8c8c8f;
    margin-top: 40px;
  }
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #009a93;
    margin-bottom: 36px;
    cursor: pointer;
  }
`;
