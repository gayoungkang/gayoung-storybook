import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
}
h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
}
p {
    margin: 0;
}
a {
    text-decoration: none;
    color: inherit;
}
ul, ol {
    list-style: none;
}
button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
}
img {
    max-width: 100%;
    height: auto;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

export default GlobalStyle;
