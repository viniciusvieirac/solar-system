import styled from 'styled-components';

export const PlanetCardContainer = styled.div`
align-items: center;
display: flex;
justify-content: center;
position: relative;
text-align: center;

&:after{
    background: white;
    content: '';
    height: 1px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100vw - 15px);
    z-index: -1;
}
`;
