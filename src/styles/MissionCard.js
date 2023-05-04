import styled from 'styled-components';

export const MissionCardStyled = styled.div`
background-color: rgba(24, 26, 37, 0.5);
border: 1px solid white;
border-radius: 17px;
display: grid;
grid-template: 96px 1px 96px / 80px 1fr 160px;
grid-template-areas: 'name name name' 'line line line' 'year country destination';

p{
    margin: auto 0;
}

.mission-card-name{
    font-size: 28px;
    grid-area: name;
    padding-left: 20px;
    text-transform: uppercase;
}

.mission-card-year{
    grid-area: year;
    padding-left: 20px;
}

.mission-card-country{
    grid-area: country;
}

.mission-card-destination{
    grid-area: destination;
    padding-right: 20px;
}

hr{ 
    grid-area: line;
}
`;
