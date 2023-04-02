import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import ghostImg from "../asset/ghost.png";
import { useState } from "react";
import gsap from "gsap";

const Nav = styled.nav`
  width: 100%;
  height: 100px;

  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--white);
  top: 0;
  left: 0;
  z-index: 5;
  font-size: 18px;
  font-weight: bold;

  backdrop-filter: blur(10px);
`;
const ghostAnim = keyframes`
  to{
    left: -10%;
  }
`;
const Ghost = styled.img`
  position: absolute;
  left: 105%;
  transform: translate(-50%, -50%);
  mix-blend-mode: exclusion;
  animation: ${ghostAnim} 10s ease-in-out infinite;

  width: var(--fontxxl);
  transform: scaleX(-1);
`;
const NavBlock = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Text = styled.p`
  color: var(--white);
  font-size: var(--fontmd);
  position: relative;
  cursor: pointer;

  transition: transform 0.2 ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: var(--greyLight);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const Navbar = () => {
  const scrollTo = (id) => {
    // let element = document.getElementById(id);
    // element.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Nav id="navbar">
      <Logo />
      <Ghost src={ghostImg} alt="ghost" />
    </Nav>
  );
};

export default Navbar;
