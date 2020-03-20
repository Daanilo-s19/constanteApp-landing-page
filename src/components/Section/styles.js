import styled from "styled-components";
import { Medium } from "../../utils/styles";
export const Container = styled.section`
  position: relative;
  z-index: 2;
  margin-top: 95vh;
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 132px rgba(0, 25, 23, 0.1);
  border-radius: 30px 30px 0 0;
  /* margin-top: -100px; */
  /* padding: 136px 0; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Medium}) {
    margin-top: 95vh;
  }
`;
