import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #F2F0EB;
    min-height: 100%;
    min-width: 100%;
    @media (max-width: 768px) {
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll; 
    }
  }

  #app::-webkit-scrollbar {
    display: none;
  }

  p,
  label {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
