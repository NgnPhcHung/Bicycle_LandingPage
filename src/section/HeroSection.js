import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import StaticBike from '../component/Bike/Hero/StaticBike'
gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: var(--dark);
  z-index: 2;

  text-transform: capitalize;

  &:nth-child(2){
    right: 0;
  }
`
const FrontText= styled.h1`
  width: 66%;
  color: var(--white);
  font-size: var(--fontBig);
  text-align: left;
  
  z-index: 2;
  span{
    margin-left: 15px;
    color: var(--green);
    width: fit-content;
  }
  @media (max-width: 70em) {
    font-size: var(--fontxxxl);
  }

  @media (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media (max-width: 48em) {
    font-size: var(--fontlg);
  }
`
const BackText= styled.span`
  align-self: flex-end;
  width: fit-content;
  z-index: 1;
  font-size: var(--fontBig);
  transform: rotate(-10deg);
  stroke-width: 1px;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;

  @media (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media (max-width: 48em) {
    font-size: var(--fontxl);
    z-index: 2;
  }
`
const ModelText = styled.div`
  position: absolute;
  left: 5%;
  color: var(--white);
  font-weight: 100;

  h2{
    font-weight: 600;
    font-size: var(--fontxxl);
    background-image: linear-gradient(150deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 64em){
    left: unset;
    right: 5%;
    top: 0;
  }
`

const HeroSection = () => {
  const container = useRef(null);
  const textOne = useRef(null)
  const textTwo = useRef(null)

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=250 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOne.current, { x: "10%" }, { x: "-43%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "16%" }, "key1")

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section ref={container} className='panel' id="herosection" >
      <FrontText ref={textTwo} >Ride your <span>bicyle</span></FrontText>
      <BackText ref={textOne} >To heaven with us</BackText>
      <ModelText>
        <h2>XCT</h2>
        Bike of ghost
      </ModelText>
      <StaticBike/>
    </Section>
  )
}

export default HeroSection