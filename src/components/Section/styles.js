import styled from "styled-components";
import { Medium } from "../../utils/styles";
export const Container = styled.section`
  position: relative;
  z-index: 2;
  margin-top: 95vh;
  width: 100%;
  height: auto;
  background: #ffffff;
  border-radius: 40px 40px 0 0;
  /* margin-top: -100px; */
  /* padding: 136px 0; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Medium}) {
    margin-top: 95vh;
  }
`;
