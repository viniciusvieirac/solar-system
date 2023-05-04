import styled from 'styled-components';

export const PlanetCardContent = styled.div`
align-items: center;
display: grid;
grid-template-columns: 1fr 21px;
height: 325px;
justify-content: center;
`;

export const PlanetCardImage = styled.img`
margin-top: 21px;
object-fit: contain;
width: ${({ size }) => size.width}px;
height: ${({ size }) => size.height}px;
`;
