import React from 'react';
import SolarSystem from './SolarSystem';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Sistema Solar</h1>
        </header>
        <SolarSystem />
      </>
    );
  }
}

export default Header;
