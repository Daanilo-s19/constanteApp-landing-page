import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  margin: 124px 0;
`;
export const Item = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;
