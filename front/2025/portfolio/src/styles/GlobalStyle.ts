import { createGlobalStyle } from "styled-components";
import { media } from "../utils/media";

const fontPath = `/fonts/`;

const GlobalStyle = createGlobalStyle`
/* Pretendard-100 */
@font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 100;
    src: local(""),
    url('${fontPath}Pretendard/Pretendard-Thin.woff2') , 
    url('${fontPath}Pretendard/Pretendard-Thin.woff') format("woff"), 
    url('${fontPath}Pretendard/Pretendard-Thin.ttf') format("truetype"); 
}
/* Pretendard-300 */
@font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    src: local(""),
    url('${fontPath}Pretendard/Pretendard-Light.woff2') , 
    url('${fontPath}Pretendard/Pretendard-Light.woff') format("woff"), 
    url('${fontPath}Pretendard/Pretendard-Light.ttf') format("truetype"); 
}
/* Pretendard-400 */
@font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    src: local(""),
    url('${fontPath}Pretendard/Pretendard-Regular.woff2') , 
    url('${fontPath}Pretendard/Pretendard-Regular.woff') format("woff"), 
    url('${fontPath}Pretendard/Pretendard-Regular.ttf') format("truetype"); 
}
/* Pretendard-500 */
@font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    src: local(""),
    url('${fontPath}Pretendard/Pretendard-Medium.woff2') , 
    url('${fontPath}Pretendard/Pretendard-Medium.woff') format("woff"), 
    url('${fontPath}Pretendard/Pretendard-Medium.ttf') format("truetype"); 
}
/* Pretendard-600 */
@font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    src: local(""),
    url('${fontPath}Pretendard/Pretendard-SemiBold.woff2') , 
    url('${fontPath}Pretendard/Pretendard-SemiBold.woff') format("woff"), 
    url('${fontPath}Pretendard/Pretendard-SemiBold.ttf') format("truetype"); 
}
/* Pretendard-700 */
@font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    src: local(""),
    url('${fontPath}Pretendard/Pretendard-Bold.woff2') , 
    url('${fontPath}Pretendard/Pretendard-Bold.woff') format("woff"), 
    url('${fontPath}Pretendard/Pretendard-Bold.ttf') format("truetype"); 
}
/* Pretendard-800 */
@font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    src: local(""),
    url('${fontPath}Pretendard/Pretendard-ExtraBold.woff2') , 
    url('${fontPath}Pretendard/Pretendard-ExtraBold.woff') format("woff"), 
    url('${fontPath}Pretendard/Pretendard-ExtraBold.ttf') format("truetype"); 
}

/* Global reset styles */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    /* font-size: 100%; */
    vertical-align: baseline;
    background: transparent;
    font-size: 100%;
    font-weight: 400;
    letter-spacing: -0.005em;
    line-height: 1.5;
    font-style: normal;
    font-family: "Pretendard", sans-serif;
    word-break: keep-all;
    word-wrap: break-word;

    color: ${(props) => props.theme.textColor};
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}

*{
    box-sizing: border-box;

    ::selection {
        background-color: ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.bgColor};
    }
}

html {
    font-size: 18px; 
    @media ${media.tablet} {    
      font-size: 16px; 
    }

    @media ${media.mobile} {
      font-size: 14px;  
    }

  }

  body {
    font-size: 1rem; 
    font-family: "Pretendard", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    overflow-x: hidden;
  }


menu, ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration:none;
  color: inherit;
  display: block;
}

button{
    margin: 0;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0 0.5rem;
    display: block;
    color: inherit;
}
mark {
    padding: 0 5px;
    background-color: ${(props) => props.theme.accentColor};
    color: #fff;
    font-weight: bold;
  
}

input{
    &:focus-visible{
        outline: none;
    }
}
img{
    max-width: 100%;
    vertical-align: middle;
}
.btn{
    border-radius: 0;
    box-shadow: none;
    display: block;
    text-align: center;
    color: inherit;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.icon {
    display: block;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    text-indent: -9999%;
    overflow: hidden;
}


`;

export default GlobalStyle;
