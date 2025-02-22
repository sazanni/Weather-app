import styled from "styled-components";
import { ReactNode } from "react";

interface AppWrapperProps {
    children: ReactNode;
    $overflow?: string;
}

const StyledAppWrapper = styled.div<AppWrapperProps>`
    width: 100%;
    min-height: 100vh;
    padding: 2vh;
    background-image: ${({ theme }) => theme.weatherBg}; 
    background-size: cover;
    background-position: center;
    overflow: ${({$overflow}) => $overflow}
`

const AppWrapper: React.FC<AppWrapperProps> = (props) => {
    return <StyledAppWrapper {...props} />
}

export default AppWrapper;