import React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
  children?: React.ReactNode;
  color?: string;
  fontSize?: string;
  $border?: string;
  width?: string;
  height?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
  $padding?: string;
  $margin?: string;
  $position?: string;
  $justifyContent?: string;
  $alignItems?: string;
  opacity?: string;
  $boxShadow?: string;
  $flexDirection?: string;
  $display?: string;
  $textAlign?: string;
}

export const StyledContainer = styled.div<ContainerProps>`
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
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  display: ${({ $display }) => $display};
  text-align: ${({ $textAlign }) => $textAlign};
`;

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledContainer {...props} />;
};

export default Container;