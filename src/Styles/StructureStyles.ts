import styled, { css } from "styled-components";
import { Imagens } from "./Images";
type MainPageProps = {
  bg: string;
};
export const MainPage = styled.main<MainPageProps>`
  ${({ bg: Bg }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 5rem 10rem;
    gap: 12rem;
    flex-wrap: wrap;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    @media (max-width: 1310px) {
      background-image: url(${Imagens.BgOfMobile});
      background-repeat: no-repeat;
      background-size: contain;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const CardsDiv = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 60rem;
    gap: 3rem;
    justify-content: space-between;
    @media (max-width: 1310px) {
      flex-direction: column-reverse;
      gap: 0;
    }
  `}
`;

export const FormDiv = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    width: 39rem;
    @media (max-width: 1310px) {
      padding-bottom: 3rem;
    }
  `}
`;
export const FormElement = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    width: 39rem;
    @media (max-width: 1310px) {
      padding-bottom: 3rem;
    }
  `}
`;

export const TyDiv = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    align-items: center;
  `}
`;
