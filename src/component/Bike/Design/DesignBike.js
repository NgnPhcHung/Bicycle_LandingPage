import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { DesignBikeModel } from "./DesignBikeModel";

const BikeWrapper = styled.div`
  width: 80%;
  height: 100%;
  right: 0;
  position: absolute;
  
  z-index: 2;
  background-color: transparent;

  @media (max-width: 64em) {
    width: calc(100% - 12px);
  }
`;

const Cylinder = () =>{
  
  return (
    <mesh position={[0, -1, 0]}>
      <cylinderBufferGeometry attach='geometry' args={[1.5, 1, 0.4]}/>
      <meshLambertMaterial attach='material' color='#CDCDCD'/>
    </mesh>
  )
}

const DesignBike = () => {
  return (
    <BikeWrapper>
      <Canvas camera={{fov: 24,}}>
        <directionalLight intensity={1} position={[1.5, 1.3, 0]} />
        <spotLight color={"#4891C6"} position={[0, 0.5, 2.5]} angle={0.4}/>
        <spotLight color={"#E2DB4F"} position={[0, 0.5, -2.5]} angle={0.4}/>
        <spotLight  angle={0.3} position={[10, 15, 10]} />
        <OrbitControls autoRotate rotateSpeed={0.2} enableZoom={false}/>
        <Suspense fallback={null} >
          <DesignBikeModel />
          <Cylinder/>
        </Suspense>
      </Canvas>
    </BikeWrapper>
  );
};

export default DesignBike;
