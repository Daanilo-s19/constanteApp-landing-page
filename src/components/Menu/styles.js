import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  -webkit-animation: fadeIn 2.5s ease-in-out;
  -moz-animation: fadeIn 2.5s ease-in-out;
  -o-animation: fadeIn 2.5s ease-in-out;
  animation: fadeIn 2.5s ease-in-out;
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
`;
