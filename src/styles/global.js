import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
     margin:0;
     padding: 0;
     background: white;
     box-sizing: border-box;
     outline: 0;
     font-family: Open-Sans, Arial, Helvetica, sans-serif;
 }
  :root{
    --white: #f5f5f5;
    --vanilla:#f1ede8;
    --black: #0c0d0d;
    --orange:#c85311;
    --gray:#636363;
    --red:#c53030;
    --greyKenzie: #212529;
    --pinkKenzie: #FF577F;
    --grey2:#343B41;
    --grey1:#868E96;
}
body{
    background: var(--red);
    color: var(--black);
}
border-style, input, button{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
}
h1,h2,h3,h4,h5,h6{
    font-family: "roboto";
    font-weight: 700;
}
button{
    cursor:pointer;
}
a{
    text-decoration: none;
}
 `;
