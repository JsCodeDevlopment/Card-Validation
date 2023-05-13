import styled, { css } from "styled-components";

type CardProps = {
    BgCard: string
}

export const FirstCard = styled.div<CardProps>`
${({ BgCard })=>css`
    display: flex;
    width: 44.8rem;
    height: 25rem;
    background-image: url(${ BgCard });
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    align-self: flex-end;
`}
`
export const BackCard = styled.div<CardProps>`
${({ BgCard })=>css`
    display: flex;
    width: 44.8rem;
    height: 25rem;
    background-image: url(${ BgCard });
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    align-self: flex-start;
`}
`