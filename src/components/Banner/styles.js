import styled from "styled-components";
import { Medium } from "../../utils/styles";
import bgPhone from "../../assets/BG-phone.png";

export const Content = styled.div`
  width: 80%;
  height: auto;
  padding: 30px 0;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    no-repeat url(${bgPhone});
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .plataforms {
    margin-bottom: 120px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #505052;
    margin-bottom: 16px;
  }
  span {
    /* width: 531px; */
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #8c8c8f;
    margin-bottom: 48px;
  }
  @media (max-width: ${Medium}) {
    img {
      width: 626px;
    }
    h2 {
      font-size: 24px;
      line-height: 36px;
    }
    span {
      font-size: 12px;
      margin: 0 15px 48px;
      line-height: 18px;
      text-align: center;
    }
    .plataforms {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 173.4px;
        margin-bottom: 32px;
      }
    }
  }
`;
