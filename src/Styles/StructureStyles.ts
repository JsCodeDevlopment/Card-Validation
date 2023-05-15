import styled, { css } from "styled-components";
import { Imagens } from "./Images";
type MainPageProps = {
  Bg: string;
};
export const MainPage = styled.main<MainPageProps>`
  ${({ Bg }) => css`
    display: flex;
    width: 100%;
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
export const FormDateDiv = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;
