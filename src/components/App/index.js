import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import Router from '../../Router';

import GlobalStyles from '../../assets/styles/global';

import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

function App() {
  return (

    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
