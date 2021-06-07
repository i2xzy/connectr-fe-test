import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

import Game from './components/Game';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const theme = {
  palette: {
    primary: '#4B00FF',
    secondary: '#F39CFF',
    foreground: '#3CBEA9',
    background: '#1F1926',
  },
  spacer: (scale: number) => scale * 4,
};

const client = new ApolloClient({
  uri: 'https://connectr-swapi.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Game />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
