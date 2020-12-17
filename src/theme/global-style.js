import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`
