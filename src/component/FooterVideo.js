import React from "react";
import Video from "../asset/Video.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  video {
    z-index: 1;
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  width: 100%;
  height: 100%;
`;

const FooterVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <video src={Video} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  );
};

export default FooterVideo;
