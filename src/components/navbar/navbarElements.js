import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(65, 11, 16, 0.05);
  /* overflow-x: hidden; */
`;

export const NavWrapper = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: relative;
  overflow: visible;
`;

export const Logo = styled.div`
  color: #ff0000;
  display: flex;
  font-size: 34px;
  justify-content: center;
  align-items: center;
  h1 {
    color: black;
    margin-left: 5px;
    font-size: 30px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  /* overflow: visible; */
  li {
    list-style-type: none;
    transition: all 0.3s ease;
    overflow: visible;
    &:hover {
      opacity: 0.7;
      transform: translateY(-5px);
    }

    a {
      text-decoration: none;
      color: black;
      padding: 10px 20px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: red;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? "translateY(0)" : "translateY(-100%)"};
    transition: all 0.3s ease;
    overflow-x: hidden;
    z-index: 9;
    a {
      color: white !important;
    }

    li:nth-child(1) {
      transition-delay: 0.15s;
      transform: ${({ isMenuOpened }) =>
        isMenuOpened ? "translateX(0)" : "translateX(-1000px)"};
    }
    li:nth-child(2) {
      transition-delay: 0.3s;
      transform: ${({ isMenuOpened }) =>
        isMenuOpened ? "translateX(0)" : "translateX(1000px)"};
    }
    li:nth-child(3) {
      transition-delay: 0.45s;
      transform: ${({ isMenuOpened }) =>
        isMenuOpened ? "translateX(0)" : "translateX(-1000px)"};
    }
  }
`;

export const Hamburger = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  right: 30px;
  visibility: hidden;
  z-index:10;

  @media screen and (max-width: 768px) {
    visibility: visible;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ isMenuOpened }) =>
    isMenuOpened ? "white" : "#ff0000"};
  transition: all 0.3s ease;

  &:nth-child(1) {
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? "translateY(12.5px) rotate(45deg)" : ""};
  }
  &:nth-child(2) {
    width: ${({ isMenuOpened }) => (isMenuOpened ? "100%" : "75%")};
    opacity: ${({ isMenuOpened }) => (isMenuOpened ? "0" : "1")};
  }
  &:nth-child(3) {
    width: ${({ isMenuOpened }) => (isMenuOpened ? "100%" : "90%")};
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? "translateY(-12.5px) rotate(-45deg)" : ""};
  }
`;
