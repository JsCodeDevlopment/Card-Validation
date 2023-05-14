import styled, { css } from "styled-components";
type MainPageProps = {
  Bg: string;
};
export const MainPage = styled.main<MainPageProps>`
  ${({ Bg }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 5rem 10rem;
    gap: 12rem;
    flex-wrap: wrap;
    background-image: url(${Bg});
    background-repeat: no-repeat;
  `}
`;

export const CardsDiv = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 60rem;
    flex-wrap: wrap-reverse;
    gap: 3rem;
    justify-content: space-between;
  `}
`;

export const FormDiv = styled.div`
${()=>css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 39rem;
`}
`