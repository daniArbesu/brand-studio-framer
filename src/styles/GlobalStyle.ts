import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size:62.5%;
  line-height: 1.25;
}

body {
    background-color: ${theme.color.background};
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
}

ul,li{
  list-style: none;
}

p,
span {
  font-size: 1.4rem;
}

a {
  font-weight: ${theme.weight.semibold};
}
`;

export default GlobalStyle;
