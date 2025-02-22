import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../HomePage/Home';
import { ThemeProvider } from 'styled-components';
import { clearTheme, heatTheme, windTheme, snowfallTheme, rainTheme, sunnyTheme, cloudyTheme} from './Themes/theme';
import GlobalStyles from '../../GlobalStyles';
import CityWeather from '../WeatherPage/CityWeather';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const nowData = new Date()
const nowHours = nowData.getHours()
const themes = [clearTheme, heatTheme, windTheme, snowfallTheme, rainTheme, sunnyTheme, cloudyTheme];

const App: React.FC = () => {
  const [theme, setTheme] = useState(getRandomTheme());
  function getRandomTheme() {
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
}

  const navParams = useSelector((state: any) => state.weather.currentCity)
  const themeParams = useSelector((state: any) => state.weather.weatherObject)
  console.log(themeParams)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`city/${navParams}`} element={<CityWeather />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;