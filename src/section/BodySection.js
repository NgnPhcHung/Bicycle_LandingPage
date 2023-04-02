import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import BodyModel from "../component/BodyModel";
import { useInView } from "react-intersection-observer";
import { Model } from "../component/Bike/Body/Mountain_bike";

const Section = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const TextBox = styled.ul`
  width: 15em;
  height: 80%;
  background-color: transparent;
  left: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  list-style: none;
  z-index: 4;

  @media (max-width: 64em) {
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
  }
`;
const TextItem = styled.li`
  position: relative;
  width: 100%;
  color: var(--white);

  font-size: var(--fontxxl);
  font-weight: bold;
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

  &:hover::before{
    transform-origin: left;
    transform: scaleX(1);
  }

  @media (max-width: 70em) {
    font-size: var(--fontxl);
  }
  @media (max-width: 64em) {
    font-size: var(--fontlg);
  }
`;

const Bike = styled.div`
  z-index: 2;
  width: 90%;
  height: 100%;
`
const CheckPoint = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  z-index: 1;
  width: 100px;
  height: 100px;
  
  z-index: 4;
`

const list = [
  {
    text: 'Frameset',
    desc: {
      Frame: "140mm, 4-bar Horst bearing linkage, Custom formed 6061 double butted alloy, 1.5 taper",
      Shock: "RockShoxMonarch RT3 Solo air with 3 Pos. flood gate switch, rebound adj., 190mm"
    }
  },
  {
    text: 'Wheels',
    desc: {
      Tires: "WTBWolverine, Ft: 26X2.2, R: 2.1, 60TPI, Folding Aramid bead",
      Wheels: "Mavic XM-319 Disc,DoubleWall, 26'x32H",
      Spokes: "14G black w/alloy nipples, 32x32",
      "Wheel Size":"26\"",
     }
  },
  {
    text: 'Drivetrain',
    desc: {
      Crank:"SRAM, SRAMS1000, 3.3 GigaPipe, 44/33/22T, 10-speed, S = 170mm, M-XL = 175mm",
      "Bottom Bracket":"Truvativ GigaPipe,Outboard bearing, 73mm",
      "Front Derailleur":"SRAM X7, SRAMX7, 3X10,High Direct Mount",
      "Rear Derailleur":"SRAM X9, SRAMX9, SGS, 10-speed",
      Shifters:"SRAM X7, SRAMX7 trigger, 3 X 10",
      Chain:"SRAM, SRAMPC-1051",
    }
  },
  {
    text: 'Sit',
    desc: {
      Stem:"Kore B52, Forged, 4-Bolt, 31.8, 4-bolts, S-M= 60mm, L-XL = 70mm",
      Handlebar:"Kore Torsion Trail Race, Alloy, 740mmx18mm, 31.8",
      Seatpost:"Q2 Alloy 30.9X350mm"
    }
  }
]
const BodySection = () => {
  const container = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0
  });
  const [showModel, setShowModel] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const [listData, setListData] = useState([])
  const [zoomPoint, setZoomPoint] = useState(-1)

  const open = () => setShowModel(true) 
  const close = () => setShowModel(false) 

  const listClick = (index, data) =>{
    setListData([])
    setZoomPoint(index)
    if(showModel){
      close()
      setShowNext(true)
    }else{
      open()
      setShowNext(false)
    }
    setListData(data)
  }

  const resetToDefault = () =>{
    setZoomPoint(-1)
    setListData([])
  }

  useLayoutEffect(() => {
    const texts = gsap.utils.toArray(".text")
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: container.current,
        start: "bottom+=50 top",
        end: "+=250",
        scrub: true,
      }
    })
    texts.forEach(txt => {
      tl.fromTo(txt, 3,{
        x: -50,
        opacity: 0
      },{
        x: 10,
        opacity: 1,
      }, "+=1")
    });

    return () =>{
      if(tl) tl.kill()
    }
  }, []);

  useEffect(() =>{
    !inView && setShowModel(false)
  },[inView])

  return (
    <Section ref={container} className="panel" id="bodysection">
      <AnimatePresence 
        initial="false"
        mode="wait"
        onExitComplete={() => {
          if(showNext){
            setShowModel(true)
            setShowNext(false)
          }
        }}
      >
        {
          showModel && <BodyModel modelOpen = {showModel} handleClose={close} data={listData}/>
        }
      </AnimatePresence>
      <TextBox>
        {
          list.map((v, i) =>(
            <TextItem 
              key={v.text} 
              className="text" 
              onClick={() => listClick(i, list[i])}><p>{v.text}</p></TextItem>
            )  
          )
        }
      </TextBox>
      <Bike >
        <Canvas camera={{fov: 24}} >
          <directionalLight intensity={1} position={[1.5, 1.3, 0]} />
          <spotLight color={"#4891C6"} position={[1.8, 2.7, 1.5]} />
          <spotLight  angle={1} position={[1.5, 3, 2]} />
          <Suspense fallback={null} >
            <Model zoomPoint={zoomPoint} isLeave = {inView} reset={resetToDefault}/>
          </Suspense>
        </Canvas>
      </Bike>
      <CheckPoint ref={ref}/>
    </Section>
  );
};

export default BodySection;
