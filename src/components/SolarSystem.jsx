import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import { PlanetCardContainer } from '../styles/SolarSystem';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="SolarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCardContainer>
          {planets.map((planet) => (
            <li key={ planet.name }>
              <PlanetCard
                planetImage={ planet.image }
                planetName={ planet.name }
                size={ planet.size }
              />
            </li>
          ))}
        </PlanetCardContainer>
      </div>
    );
  }
}

export default SolarSystem;
