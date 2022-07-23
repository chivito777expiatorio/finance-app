import styled,  {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    color: black;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
` 

export const Container=styled.div`
  width: 100%;

`
export const MainHeading=styled.h1``
export const Heading=styled.h2``
export const TextWrapper=styled.span``
export const Section=styled.section``
export const Row=styled.div``
export const Column=styled.div``
export const Button=styled.button``

export default GlobalStyle;