import styled from "styled-components";
import { Medium } from "../../utils/styles";
export const NavBar = styled.nav`
  position: fixed;
  z-index: 3;
  display: flex;
  height: 65px;
  justify-content: space-around;
  align-items: center;
  margin-top: 36px;
  width: 100%;
  top: 0;

  @media (max-width: ${Medium}) {
    padding: 0 18px;
  }
`;
export const Menu = styled.ul`
  width: auto;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  @media (max-width: ${Medium}) {
    display: none;
  }
  a {
    color: rgba(255, 255, 255, 0.6);
  }
  li {
    margin: 0 18px;

    &:hover {
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
    }
  }

  .clickMenu {
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    transform: scale(1);
    animation: pulse 300ms;
  }

  /* -webkit-animation: fadeIn 2.5s ease-in-out;
  -moz-animation: fadeIn 2.5s ease-in-out;
  -o-animation: fadeIn 2.5s ease-in-out;
  animation: fadeIn 2.5s ease-in-out; */
`;
