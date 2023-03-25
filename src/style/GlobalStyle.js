import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";
import "@fontsource/anton";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin :0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6{
    margin : 0;
    padding: 0
  }

body{
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    background-color: #202020;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
}

*{
    -ms-overflow-style: none;
}
::-webkit-scrollbar {
    display: none;
}
:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.4375em; //55 px
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px
  // Colors
  --dark: #202020;
  --veryDark: #000;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --orange: #EC622D;
  --sky: #f69649;
  --green: #1CD618;
  --redRgba:"216, 55, 55";
  --darkRgba: "85, 85, 85";
  //fonts
  --fontL: "Source Sans Pro light";
  --fontR: "Source Sans Pro";
  
  // gradient
  --gradient:  #1CD618 24%, #ffffff 77%;
  }
`;
