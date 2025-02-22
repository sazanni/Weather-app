import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

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
     boxShadow?: string;
}

export const WeatherStyles = styled.div<WeatherProps>`
    display: flex; 
    justify-content: ${({$justifyContent}) => $justifyContent}; 
    align-items: ${({$alignItems}) => $alignItems}; 
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
    display: ${({$display}) => $display};
    max-width: ${({$maxWidth}) => $maxWidth};
    box-shadow: 0px 0px 28px rgba(169, 156, 156, 0.54);
`;

const WeatherContainer: React.FC<WeatherProps> = (props) => {
    return (
        <WeatherStyles {...props}>
            {props.children} 
        </WeatherStyles>
    );
}

export default WeatherContainer;
