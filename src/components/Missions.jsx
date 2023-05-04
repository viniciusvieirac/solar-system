import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import { MissionCardContainer, MissionSection } from '../styles/Missions';

class Missions extends React.Component {
  render() {
    return (
      <MissionSection data-testid="missions-section">
        <Title headline="Missões" />
        <MissionCardContainer className="missions-card-container">
          {missions.map((mission) => (
            <li key={ mission.name }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </li>
          ))}
        </MissionCardContainer>
      </MissionSection>
    );
  }
}

export default Missions;
