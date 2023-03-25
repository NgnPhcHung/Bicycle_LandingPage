import React from "react";
import styled, { keyframes } from "styled-components";
import DesignBike from "../component/Bike/Design/DesignBike";
import BlurImage from "../asset/lightBlur.jpg";
import Typewriter from "typewriter-effect";

const Section = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  background-color: var(--dark);
  z-index: 2;

  position: relative;
`;

const PhotoBanner = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const Image = styled.img`
  display: inline-block;
  position: absolute;
  width: 100vw;
  height: auto;
  top: 0;
  left: 0;

  -webkit-filter: blur(35px);
  filter: blur(35px);
`;
const Typer = styled.h2`
  font-size: var(--fontxl);
  text-transform: capitalize;

  width: 80%;
  color: var(--white);
  align-self: center;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: var(--orange);
  }
  .text-2 {
    color: var(--sky);
  }
  .text-3 {
    color: var(--greyLight);
  }
`;
const Box = styled.div`
  width: clamp( 50%, 70em, 65%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  z-index: 3;

  @media (max-width: 64em){
    display: none;
  }
`;
const DesignSection = () => {
  return (
    <Section className="panel" id="DesignSection">
      <Box>
        <Typer>
          Go around the earth With Us
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class= "text-1">Modern Design</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class= "text-2">Free guarantee up to 3 years</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class= "text-3">Easy to carry</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </Typer>
      </Box>
      <DesignBike />
      <PhotoBanner>
        <Image src={BlurImage} alt="light" />
      </PhotoBanner>
    </Section>
  );
};

export default DesignSection;
