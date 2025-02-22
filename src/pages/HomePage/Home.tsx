import React, { useEffect, useState } from 'react';
import Container from '../../ui/Container';
import AppWrapper from '../../ui/AppWrapper';
import { Flex } from '../../ui/Flex';
import SuggestionInput from './Features/SuggestionInput';
import WeatherContainer from '../WeatherPage/Feautures/WeatherContainer';
import { useDispatch } from 'react-redux';
import { addWeatherObject, changeCurrentCity } from '../../slices/weatherReducer';
import Weather from '../../api/FetchWeather';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [favoriteCities, setFavoriteCities] = useState<string[]>([]);
    const [favoriteCitiesObjects, setFavoriteCitiesObjects] = useState<any[]>([]);

    useEffect(() => {
        const getAllLocalStorageKeys = (): string[] => {
            const keys: string[] = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key) {
                    keys.push(key);
                }
            }
            return keys;
        };
        setFavoriteCities(getAllLocalStorageKeys());
    }, []);

    useEffect(() => {
        const getAllCitiesObject = async () => {
            const objects: any[] = [];
            for (const cityName of favoriteCities) {
                const weatherInfo = await Weather.getWeatherInfo(cityName);
                objects.push(weatherInfo);
            }
            setFavoriteCitiesObjects(objects);
        };

        if (favoriteCities.length > 0) {
            getAllCitiesObject();
        }
    }, [favoriteCities]);

    const handleClick = async (cityName: string) => {
        if (cityName) {
            try {
                const weatherInfo = await Weather.getWeatherInfo(cityName);
                dispatch(addWeatherObject(weatherInfo));
                dispatch(changeCurrentCity(cityName));
                navigate(`/city/${cityName}`);
            } catch (error) {
                console.error('Ошибка при получении данных о погоде:', error);
            }
        }
    };

    return (
        <AppWrapper>
            <Flex $flexDirection='column' $alignItems='center'>
                <Container>
                    <SuggestionInput />
                </Container>
                <Flex $flexDirection="column" $justifyContent='center' height='60vh'>
                    <WeatherContainer color='white' width='900px' height='auto' $margin='100px 0px 0px 0px' fontSize='30px'>
                        <Flex $width='100%' $flexDirection='column'>
                            <Container width='100%' $textAlign="center">
                                <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "black", padding: '10px' }}>
                                    <span style={{ width: '25%', textAlign: 'center' }}>Город</span>
                                    <span style={{ width: '25%', textAlign: 'center' }}>Градусы</span>
                                    <span style={{ width: '25%', textAlign: 'center' }}>Ощущается</span>
                                    <span style={{ width: '25%', textAlign: 'center' }}>Ветер</span>
                                </div>
                            </Container>
                            {favoriteCities.map((item, index) => (
                                <WeatherContainer $backgroundColor="black" width='100%' key={item}>
                                    <div
                                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white', padding: '10px' }}
                                        onClick={() => handleClick(item)}
                                    >
                                        <span style={{ width: '25%', textAlign: 'center' }}>{item}</span>
                                        <span style={{ width: '25%', textAlign: 'center' }}>{favoriteCitiesObjects[index]?.current?.temp_c}°C</span>
                                        <span style={{ width: '25%', textAlign: 'center' }}>{favoriteCitiesObjects[index]?.current?.feelslike_c}°C</span>
                                        <span style={{ width: '25%', textAlign: 'center' }}>{favoriteCitiesObjects[index]?.current?.gust_kph} kph</span>
                                    </div>
                                </WeatherContainer>
                            ))}
                        </Flex>
                    </WeatherContainer>
                </Flex>
            </Flex>
        </AppWrapper>
    );
}

export default Home;