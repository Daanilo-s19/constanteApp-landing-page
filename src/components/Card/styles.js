import styled from "styled-components";
import { Medium } from "../../utils/styles";

export const Content = styled.section`
  width: 80%;
  height: auto;
  padding: 30px;
  background: #009a93;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #c7f9e5;
  }
  @media (max-width: ${Medium}) {
    flex-direction: column;
    h2 {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }
  }
`;
