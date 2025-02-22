import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
export interface WeatherProps {
    children?: ReactNode;
    color?: string;
    fontSize?: string;
    $border?: string;
    width?: string;
    height?: string;
    $backgroundColor?: any;
    $borderRadius?: string;
    $padding?: string;
    $margin?: string;
    $position?: string;
    $justifyContent?: string;
    $alignItems?: string;
    $display?: string;
    $maxWidth?: string;
}

export const StyledButton = styled.button<WeatherProps>`
    display: flex; 
    justify-content: ${({ $justifyContent }) => $justifyContent}; 
    align-items: ${({ $alignItems }) => $alignItems}; 
    color: ${({ color }) => color};
    height: ${({ height }) => height}; 
    width: ${({ width }) => width};
    font-size: ${({ fontSize }) => fontSize};
    border: ${({ $border }) => $border};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    border-radius: ${({ $borderRadius }) => $borderRadius};
    padding: ${({ $padding }) => $padding};
    margin: ${({ $margin }) => $margin};
    position: ${({ $position }) => $position};
    display: ${({ $display }) => $display};
    max-width: ${({ $maxWidth }) => $maxWidth};
`;

const CustomButton: React.FC<WeatherProps> = (props) => {
    const navigate = useNavigate();
    const handlePress = () => {
      navigate("/");
    }
    return (
        <StyledButton onClick={handlePress} {...props}>
            {props.children}
        </StyledButton>
    );
}

export default CustomButton;
