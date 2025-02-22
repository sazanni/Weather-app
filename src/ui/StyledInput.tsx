import { ReactNode } from "react";
import styled from "styled-components";

export interface InputProps {
    borderRadius?: string;
    borderColor?: string;
    borderStyle?: string;
    width?: string;
    height?: string;
    paddingLeft?: string;
    outline?: string;
    fontSize?: string;
    boxShadow?: string;
    letterSpacing?: string;
    children?: ReactNode;
}

export const StyledInput = styled.input<InputProps>`
    border-radius: 5vh;
    border-color: white;
    border-style: solid;
    width: 100vh;
    height: 7vh;
    padding-left: 3vh;
    box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.54);
    outline: none;
    font-size: 5vh;
    letter-spacing: 0.2vh;
`

