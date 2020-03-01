import styled from "styled-components";
import { Medium } from "../../utils/styles";
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
    background: ${props => (props.background ? "#FFFFFF" : "none")};

    padding: 14px 24px;
    color: ${props => (props.background ? "#909090" : "#FFFFFF")};
    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: ${props => (props.background ? "#909090" : "#FFFFFF")};
    }
  }
  @media (max-width: ${Medium}) {
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      margin: 0 0 60px;
    }
    input {
      width: 100%;
      margin: 0 0 10px;
    }
  }
`;
