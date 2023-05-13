import styled, { css } from "styled-components";

export const MainPage = styled.div`
${()=>css`
/* display: flex; */
height: 100%;
width: 100%;
background-image: ${props => props.Bg};
`}
`