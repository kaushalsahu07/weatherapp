import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

// 
export const weatherClient = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        units: "metric",
        appid: API_KEY,
    },
});