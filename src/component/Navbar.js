import React from 'react'
import styled, { keyframes } from 'styled-components'
import Logo from './Logo'
import ghostImg from '../asset/ghost.png'

const Nav = styled.nav`
  width: 100%;
  height: 100px;

  position: fixed;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--white);
  top: 0;
  left: 0;
  z-index: 5;
  font-size: 18px;
  font-weight: bold;
`
const ghostAnim = keyframes`
  to{
    left: -10%;
  }
`
const Ghost = styled.img`
  position: absolute;
  left: 105%;
  transform: translate(-50%, -50%);
  mix-blend-mode: exclusion;
  animation: ${ghostAnim} 10s ease-in-out infinite;
  
  width: var(--fontxxl);
  transform: scaleX(-1);
`
const Navbar = () => {
  return (
    <Nav id='navbar' >
      <Logo/>
      <Ghost src={ghostImg} alt="ghost" />
    </Nav>
  )
}

export default Navbar