import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import Weather from '../../../api/FetchWeather';
import CustomTooltip from './CustomTooltip';

interface Hour {
  time: string;
  temp_c: number;
}

interface ForecastDay {
  hour: Hour[];
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface WeatherResponse {
  forecast: Forecast;
}

interface ForecastData {
  name: string;
  temperature: number;
}

interface RootState {
  weather: {
    currentCity: string;
  };
}

const WeatherDayChart: React.FC = () => {
  const [data, setData] = useState<ForecastData[]>([]);
  const weatherForecastState = useSelector((state: RootState) => state.weather.currentCity);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!weatherForecastState) return;

      try {
        const res: WeatherResponse = await Weather.getWeatherWeekPredict(weatherForecastState);
        const filteredDate = [0, 4, 10, 16, 22].map((index: number) => res.forecast.forecastday[0].hour[index]);
        const forecastData = filteredDate.map((obj: Hour) => ({
          name: obj.time.slice(10),
          temperature: obj.temp_c,
        }));
        setData(forecastData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchWeatherData();
  }, [weatherForecastState]);

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      {data.length > 0 ? (
        <LineChart data={data} margin={{ top: 15, right: 12, left: 0 }}>
          <XAxis
            dataKey="name"
            tick={({ x, y, payload }) => (
              <text x={x + 2} y={y + 15} textAnchor="middle" fill="#ffffff">{payload.value}</text> 
            )}
          />
          <YAxis
            tick={({ x, y, payload }) => (
              <text x={x - 10} y={y + 6} textAnchor="end" fill="#ffffff">{payload.value}</text> 
            )}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="temperature" stroke="#4cd8ff" activeDot={{ r: 10 }} />
        </LineChart>
      ) : (
        <div>Загрузка данных...</div>
      )}
    </ResponsiveContainer>
  );
};

export default WeatherDayChart;
