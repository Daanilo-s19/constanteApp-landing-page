import styled from "styled-components";
import { Medium } from "../../utils/styles";

export const Content = styled.section`
  width: 80%;
  height: auto;
  padding: 30px;
  background: #009a93;
  border-radius: 20px;
  margin-bottom: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #c7f9e5;
    display: flex;
    align-items: center;
    margin: 0 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    p {
      margin: 0;
    }
  }

  @media (max-width: ${Medium}) {
    flex-direction: column;
    p {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }
  }
`;
