import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherForecastEntry {
    inputValue: string;
    weatherObject: object;
    currentCity: string;
}

const initialState: WeatherForecastEntry = {
    inputValue: "",
    weatherObject: {},
    currentCity: ""
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        changeInputValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload
        },
        addWeatherObject: (state, action: PayloadAction<object>) => {
            state.weatherObject = action.payload
        },
        changeCurrentCity: (state, action: PayloadAction<string>) => {
            state.currentCity = action.payload
        },
    },
});

export const { changeInputValue, addWeatherObject, changeCurrentCity } = weatherSlice.actions;
export default weatherSlice.reducer; 