import styled, { css } from "styled-components";
import { Theme } from "../Styles/Theme";

export const CardNumber = styled.h1`
  ${() => css`
    font-size: 3rem;
    font-weight: 200;
    ${Theme.colors.LightGrayishViolet}
  `}
`;
export const Subtitle = styled.h3`
  ${() => css`
    font-size: 1.3rem;
    font-weight: 300;
  `}
`;

export const FormText = styled.label`
  ${() => css`
    font-size: 1rem;
    letter-spacing: 0.2rem;
    font-weight: 300;
    color: ${Theme.colors.VeryDarkViolet};
  `}
`;
export const Ty = styled.h1`
  ${() => css`
    letter-spacing: 0.2rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${Theme.colors.VeryDarkViolet};
  `}
`;
export const TyInfo = styled.h1`
  ${() => css`
    font-size: 2rem;
    font-weight: 200;
    color: ${Theme.colors.DarkGrayishViolet};
  `}
`;
export const FinishImg = styled.img`
  ${() => css`
    width: 8rem;
    height: 8rem;
  `}
`;
