import React from "react";
import styled from "styled-components";

const LogoBox = styled.h2`
  height: 40px;
  width: fit-content;
  padding: 20px;
  line-height: 32px;

  font-family: "anton";
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: var(--fontxl);
  text-align: center;
  color: var(--white);
  position: relative;
  cursor: pointer;
`;

const Logo = () => {
  return <LogoBox>ghost</LogoBox>;
};

export default Logo;
