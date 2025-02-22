import React, { useEffect, useState } from 'react';
import AppWrapper from '../../ui/AppWrapper';
import { Flex } from '../../ui/Flex';
import WeatherContainer from './Feautures/WeatherContainer';
import { useSelector } from 'react-redux';
import Container from '../../ui/Container';
import WeatherWeekChart from './Feautures/WeatherWeekChart';
import WeatherDayChart from './Feautures/WeatherDayChart';
import CustomButton from './Feautures/CustomButton';

interface CityWeather {
  location: {
    name: string;
  };
}

const CityWeather: React.FC = () => {
  const cityWeather = useSelector((state: any) => state.weather.weatherObject);
  const [favorite, setFavorite] = useState<boolean>(() => {
    const savedFavorite = localStorage.getItem(`${cityWeather.location.name}`);
    return savedFavorite === 'true';
  });

  const [imgSrc, setImgSrc] = useState<string>(favorite ? "/heart.png" : "/emptyheart.png");

  useEffect(() => {
    setImgSrc(favorite ? "/heart.png" : "/emptyheart.png");
    if (favorite) {
      localStorage.setItem(`${cityWeather.location.name}`, String(favorite));
    } else {
      localStorage.removeItem(`${cityWeather.location.name}`);
    }
  }, [favorite, cityWeather.location.name]);

  const handleClick = () => {
    setFavorite(prevFavorite => !prevFavorite);
  };

  console.log(cityWeather);
  return (
    <AppWrapper $overflow="hidden" >

      <Flex height="100px" $alignItems="center" $justifyContent="space-between" >
        <WeatherContainer
          color="white"
          $justifyContent="center"
          $alignItems="center"
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          width="300px"
          $maxWidth="350px"
          height="80px"
          $borderRadius="20px"
        >
          <CustomButton
            color="white"
            $justifyContent="center"
            $alignItems="center"
            $backgroundColor="rgba(50, 50, 50, 0.5)"
            width="300px"
            $maxWidth="350px"
            height="80px"
            $borderRadius="20px"
          >
            На главную
          </CustomButton>
        </WeatherContainer>

        <WeatherContainer
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          $borderRadius="20px"
          width="calc(100% - 400px)"
          $alignItems="center"
          $justifyContent="space-between"
          fontSize="30px"
          color="white"
          $padding="20px 20px"
          $margin='0px 0px 0px 10px'
        >
          <Container>{cityWeather.location.country}</Container>
          <Container>{cityWeather.location.region}</Container>
          <Container>{cityWeather.location.localtime}</Container>
        </WeatherContainer>

        <Container width="50px" $alignItems="center" $justifyContent='center'>
          <img onClick={handleClick} src={imgSrc} style={{ width: '60px' }} />
        </Container>
      </Flex>

      <Container
        $backgroundColor="rgba(50, 50, 50, 0.5)"
        color="white"
        $margin="10px 0"
        width="300px"
        $borderRadius="40px"
        $flexDirection="column"
        $alignItems="center"
        $justifyContent="center"
        $padding="20px"
      >
        <Container fontSize="40px" $margin="0px">
          <img src="/Vector.png" alt="weather icon" style={{ marginRight: '10px' }} />
          {cityWeather.location.name}
        </Container>
        <Container $display="flex" fontSize="30px" $margin="0px">
          {cityWeather.current.condition.text}{' '}
          <img src={cityWeather.current.condition.icon} style={{ width: '50px', height: '50px' }} />
        </Container>
      </Container>


      <Flex height="calc(40vh - 100px)" $alignItems="center" $gap="10px" $margin="0 0 15px 0" $justifyContent="center">
        <WeatherContainer
          color="white"
          $justifyContent="center"
          $alignItems="center"
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          width="100%"
          $maxWidth="380px"
          height="100%"
          $borderRadius="40px"
        >
          <Flex $gap="20px" $flexDirection="column" $alignItems="center">
            <Container fontSize="25px">Температура в градусах:</Container>
            <Container fontSize="60px">{cityWeather.current.temp_c}°C</Container>
          </Flex>
        </WeatherContainer>

        <WeatherContainer
          color="white"
          $justifyContent="center"
          $alignItems="center"
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          width="100%"
          $maxWidth="380px"
          height="100%"
          $borderRadius="40px"
        >
          <Flex $gap="20px" $flexDirection="column" $alignItems="center">
            <Container fontSize="25px">Ощущается как:</Container>
            <Container fontSize="60px">{cityWeather.current.feelslike_c}°C</Container>
          </Flex>
        </WeatherContainer>

        <WeatherContainer
          color="white"
          $justifyContent="center"
          $alignItems="center"
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          width="100%"
          $maxWidth="380px"
          height="100%"
          $borderRadius="40px"
        >
          <Flex $gap="20px" $flexDirection="column" $alignItems="center">
            <Container fontSize="25px">Порыв ветра k/ph:</Container>
            <Container fontSize="60px">
              {cityWeather.current.gust_kph} <img src="/windy.png" />
            </Container>
          </Flex>
        </WeatherContainer>

        <WeatherContainer
          color="white"
          $justifyContent="center"
          $alignItems="center"
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          width="100%"
          $maxWidth="730px"
          height="100%"
          $borderRadius="40px"
        >
          <Flex $gap="20px" $flexDirection="column" $alignItems="center">
            <Container fontSize="25px">Влажность:</Container>
            <Container fontSize="60px">
              {cityWeather.current.humidity} <img src="/humid.png" />
            </Container>
          </Flex>
        </WeatherContainer>
      </Flex>

      <Flex height="calc(50vh - 120px)" $gap="10px" $justifyContent="center" >
        <WeatherContainer
          color="white"
          $justifyContent="center"
          $alignItems="center"
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          width="100%"
          $maxWidth="70%"
          height="100%"
          $borderRadius="40px"
          $margin="0px"
        >
          <WeatherWeekChart />
        </WeatherContainer>

        <WeatherContainer
          color="white"
          $padding="0px 50px 0px 0px"
          $alignItems="center"
          $backgroundColor="rgba(50, 50, 50, 0.5)"
          width="100%"
          $maxWidth="600px"
          height="100%"
          $borderRadius="40px"
        >
          <WeatherDayChart />
        </WeatherContainer>
      </Flex>
    </AppWrapper>
  );
};

export default CityWeather;