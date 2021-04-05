import React, { useState } from "react";
import {
  Logo,
  NavbarContainer,
  NavLinks,
  NavWrapper,
  Hamburger,
  Line,
} from "./navbarElements";
import { NavLink } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <NavbarContainer>
      <NavWrapper>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <Logo>
            <AiFillYoutube />
            <h1>VideoApp</h1>
          </Logo>
        </a>
        <NavLinks isMenuOpened={isMenuOpened}>
          <li>
            <NavLink to="/" exact onClick={() => setMenuOpened(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpened(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/list" onClick={() => setMenuOpened(false)}>
              Video List
            </NavLink>
          </li>
        </NavLinks>
        <Hamburger onClick={() => setMenuOpened(!isMenuOpened)}>
          <Line isMenuOpened={isMenuOpened}></Line>
          <Line isMenuOpened={isMenuOpened}></Line>
          <Line isMenuOpened={isMenuOpened}></Line>
        </Hamburger>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
