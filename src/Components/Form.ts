import styled, { css } from "styled-components";
import { Theme } from "../Styles/Theme";

export const GenericInput = styled.input`
${()=>css`
width: 38.1rem;
height: 4rem;
-webkit-appearance: none;
-moz-appearance: textfield;
border: solid 0.3rem ${Theme.colors.LightGrayishViolet};
border-radius: 1rem;
&:focus{
    border-color: ${Theme.colors.DarkGrayishViolet};
}
`}
`
export const LittleInput = styled.input`
${()=>css`
width: 6rem;
height: 4rem;
border: solid 0.3rem ${Theme.colors.LightGrayishViolet};
border-radius: 1rem;
&:focus{
    border-color: ${Theme.colors.DarkGrayishViolet};
}
`}
`