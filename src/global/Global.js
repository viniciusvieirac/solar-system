import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: Epilogue, sans-serif;
    font-weight: 100;
    margin: 0;
    padding: 0;
}

body {
    align-items: center;
    background-image: ${({ theme }) => `url(${theme.images.background.background})`};
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    & > div {
        max-width: 1280px
    }
}

`;
