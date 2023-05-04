import styled from 'styled-components';

export const HeaderTitle = styled.h1`
font-size: 65px;
margin-bottom: 250px;
margin-top: 138px;
position: relative;
text-align: center;

 &:before{
    border: 1px solid white;
    border-radius: 50%;
    content: '';
    height: 307.45px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    width: 120.07px;
 }
`;
