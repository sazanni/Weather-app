import styled from 'styled-components';
interface ContainerProps {
    backgroundImage: string;
}

export const StyledContainer = styled.div`
    background-image: ${(props) => props.theme.nightWeather}; 
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;




