import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: Space Grotesk;
    text-decoration: none;
    background-color: ${({ theme })=>theme.colors.White};
  }
`;