import styled from "styled-components";
import { ReactNode } from "react";

interface FlexContainerProps {
    $alignItems?: string;
    $justifyContent?: string;
    children?: ReactNode;
    $flexDirection?: string;
    $width?: string;
    $position?: string;
    height?: string;
    $flexWrap?: string;
    $gap?: string;
    $margin?: string;
    $flexGrow?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    align-items: ${({ $alignItems }) => $alignItems || 'stretch'};
    justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
    flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
    width: ${({ $width }) => $width};
    position: ${({ $position }) => $position };
    height: ${({ height }) => height || 'auto'};
    flex-wrap: ${({ $flexWrap }) => $flexWrap || 'nowrap'};
    gap: ${({ $gap }) => $gap || '0'};
    margin: ${({$margin}) => $margin};
    flex-grow: ${({$flexGrow}) => $flexGrow };
`;

export const Flex: React.FC<FlexContainerProps> = (props) => {
    return <FlexContainer {...props} />
};
