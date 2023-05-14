import styled from "styled-components";

export const Button = styled.button`
width: 38.1rem;
height: 5.4rem;
color: ${({ theme })=> theme.colors.White};
background-color: ${({ theme })=>theme.colors.VeryDarkViolet};
border-radius: 1rem;
transition: ease-in-out 1s;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`