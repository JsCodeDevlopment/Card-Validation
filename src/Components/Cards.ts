import styled, { css } from "styled-components";

type CardProps = {
  BgCard: string;
};

export const FirstCard = styled.div<CardProps>`
  ${({ BgCard, theme }) => css`
    display: flex;
    width: 44.8rem;
    height: 25rem;
    flex-direction: column;
    padding: 2.5rem;
    gap: 3rem;
    background-image: url(${BgCard});
    background-repeat: no-repeat;
    color: ${theme.colors.White};
    background-size: cover;
    border-radius: 1rem;
    align-self: flex-end;
    @media (max-width: 1310px) {
      width: 38.3rem;
      height: 18.2rem;
      gap: 0.3rem;
      align-self: flex-start;
      margin-top: -5rem;
    }
  `}
`;
export const NameAndDateDiv = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const BackCard = styled.div<CardProps>`
  ${({ BgCard }) => css`
    display: flex;
    width: 44.8rem;
    height: 25rem;
    background-image: url(${BgCard});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    align-self: flex-start;
    @media (max-width: 1310px) {
      width: 38.3rem;
      height: 18.2rem;
      align-self: flex-end;
    }
  `}
`;
