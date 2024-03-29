import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: o;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-span']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
