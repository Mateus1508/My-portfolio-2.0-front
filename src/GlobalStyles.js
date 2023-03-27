import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
/*     color: ${props => props.theme.backgroundColors.text};
 */    font-family: 'Roboto Condensed', sans-serif;
}  
body {
    background-color: ${props => props.theme.backgroundColors.background};
}
`