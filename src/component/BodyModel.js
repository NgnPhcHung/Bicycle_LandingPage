import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Backdrop = styled(motion.div)`
  z-index: 4;
  width: 40vw;
  height: 70vh;

  background-color: transparent;
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Model = styled(motion.div)`
  position: absolute;
  width: 25em;
  height: max-content;
  padding: 1em;

  background-color: var(--white);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: grab;
`;
const Title = styled.h2``;
const List = styled.ul`
  width: 100%;
  height: 100%;

  list-style: none;
`;
const ListItem = styled.li`
  width: 100%;
`;

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const BodyModel = ({ modelOpen, data }) => {
  const [receiveData, setReceiveData] = useState([]);

  useEffect(() => {
    if (data.desc) {
      let temp = [];
      Object.keys(data.desc).forEach((k, i) => {
        let value = data.desc[k];
        temp.push({ k, value });
      });
      temp = temp.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => t.k === value.k && t.value === value.value)
      );
      setReceiveData(Array.from(temp));
    }
  }, [data]);

  return data&&(
    <Backdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Model
        key={data.text}
        drag
        dragConstraints={{
          top: -125,
          right: 125,
          bottom: 125,
          left: -125,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <List>
          <Title>{data.text}</Title>
          {receiveData.map((v, i) => {
            return (
              <ListItem key={i}>
                <b>{v.k}</b>: {v.value}
              </ListItem>
            );
          })}
        </List>
      </Model>
    </Backdrop>
  );
};

export default BodyModel;
