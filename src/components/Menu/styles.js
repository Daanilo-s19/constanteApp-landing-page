import styled from "styled-components";
import { Medium } from "../../utils/styles";
export const NavBar = styled.nav`
  position: fixed;
  z-index: 3;
  display: flex;
  height: 65px;
  justify-content: space-around;
  align-items: center;
  /* padding: 0 36px; */
  margin-top: 36px;
  width: 100%;
  top: 0;

  .dropdown-style {
    width: 120px;
    text-align: right;
    margin: 0;
  }
  .dropdown-item-style {
    span {
      color: rgba(0, 154, 147, 1);
      line-height: 21px;
      font-size: 14px;
    }
  }

  div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: ${Medium}) {
    padding: 0 10px;
  }
`;
export const Menu = styled.ul`
  width: 50%;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  @media (max-width: ${Medium}) {
    display: none;
  }
  a {
    color: rgba(255, 255, 255, 0.6);
  }
  li {
    margin: 0 16px;

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
  .blog {
    width: 156px;
    height: 45px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 100px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* -webkit-animation: fadeIn 2.5s ease-in-out;
  -moz-animation: fadeIn 2.5s ease-in-out;
  -o-animation: fadeIn 2.5s ease-in-out;
  animation: fadeIn 2.5s ease-in-out; */
`;
