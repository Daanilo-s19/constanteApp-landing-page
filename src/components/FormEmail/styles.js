import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 18px;

  button {
    width: 217px;
    height: 53px;
    background: #c7f9e5;
    border-radius: 100px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #009a93;
    margin-left: 16px;
  }

  input {
    width: 312px;
    height: 48px;
    border: 1px solid #dcdce0;
    box-sizing: border-box;
    border-radius: 40px;
    background: none;
    padding: 14px 24px;
    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #ffffff;
    }
  }
`;
