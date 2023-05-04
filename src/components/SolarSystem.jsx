import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="SolarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planets.map((planet) => (
            <li key={ planet.name }>
              <PlanetCard planetImage={ planet.image } planetName={ planet.name } />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
