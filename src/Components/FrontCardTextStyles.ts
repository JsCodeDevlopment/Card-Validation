import styled, { css } from "styled-components";
import { Theme } from "../Styles/Theme";

export const CardNumber = styled.h1`
  ${() => css`
    font-size: 3rem;
    font-weight: 200;
  `}
`;
export const Subtitle = styled.h3`
  ${() => css`
    font-size: 1.3rem;
    font-weight: 300;
  `}
`;

export const FormText = styled.label`
${()=>css`
font-size: 1rem;
letter-spacing: 0.2rem;
font-weight: 300;
color: ${Theme.colors.VeryDarkViolet};
`}
`