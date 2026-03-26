import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

// Create an axios instance with the base URL and default parameters for the OpenWeatherMap API
export const weatherClient = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        units: "metric",
        appid: API_KEY,
    },
});