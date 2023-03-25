import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { Model } from "./Mountain_bike";

const BikeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const Bike = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lightAngle, setLightAngle] = useState(1)
  
  const handleScroll = () => {
    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BikeWrapper>
      <Canvas camera={{fov: 24}} >
        <directionalLight intensity={1} position={[1.5, 1.3, 0]} />
        <spotLight color={"#4891C6"} position={[1.8, 2.7, 1.5]} />
        <spotLight  angle={lightAngle} position={[1.5, 3, 2]} />
        {/* <OrbitControls/> */}
        <Suspense fallback={null} >
            <Model/>
        </Suspense>
      </Canvas>
    </BikeWrapper>
  );
};

export default Bike;
