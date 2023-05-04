import React from 'react';
import PropTypes from 'prop-types';
import { PlanetCardContent, PlanetCardImage } from '../styles/PlanetCard';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, size } = this.props;
    return (
      <PlanetCardContent data-testid="planet-card">
        <PlanetCardImage
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          size={ size }
        />
        <p data-testid="planet-name">
          {planetName}
        </p>
      </PlanetCardContent>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlanetCard;
