import styled from "styled-components";
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
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #8c8c8f;
    margin-bottom: 48px;
  }
`;
