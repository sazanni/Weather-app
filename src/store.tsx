import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherReducer"; 

const store = configureStore({
    reducer: {
        weather: weatherReducer, 
    },
});

export default store;
