import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Missions from './components/Missions';
import { theme } from './global/Theme';
import { GlobalStyle } from './global/Global';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Header />
        <SolarSystem />
        <Missions />
      </ThemeProvider>
    );
  }
}

export default App;
