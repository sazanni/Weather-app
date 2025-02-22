import React from 'react';
import { theme } from '../themes/theme';
import { ThemeProvider, useTheme } from 'styled-components';
import { StyledContainer } from '../components/StyledContainer';
const Home: React.FC = () => {
    const theme = useTheme();
    return (
        <StyledContainer theme={theme}>

        </StyledContainer>


    );
}

export default Home;

