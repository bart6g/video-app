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
        <Logo>
          <AiFillYoutube />
          <h1>VideoApp</h1>
        </Logo>
        <NavLinks isMenuOpened={isMenuOpened}>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/list">Video List</NavLink>
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
