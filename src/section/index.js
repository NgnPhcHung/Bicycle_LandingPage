import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import BodySection from './BodySection';
import DesignSection from './DesignSection';
import HeroSection from './HeroSection';
import OrderSection from './OrderSection';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  overscroll-behavior: none;
  width: 600% !important;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  top: 0;

  .red{
    background-color: var(--dark);
  }
`;

const Sections = () => {
  const slider = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    });
    return () => ctx.revert();
  });
  return (
    <Section ref={slider}>
      <HeroSection/>
      <BodySection/>
      <DesignSection/>
      <OrderSection/>
    </Section>
  )
}

export default Sections