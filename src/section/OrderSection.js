import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: var(--dark);
  z-index: 5;

  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: var(--fontxxxl);
  color: var(--white);

`;

const OrderSection = () => {


  return (
    <Section className="panel">
      <Title>Thank you!</Title>
    </Section>
  );
};

export default OrderSection;
