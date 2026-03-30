import { weatherApi } from "../api/weather";
import { useQuery } from "@tanstack/react-query";
import { coordinates, ForecastData, WeatherData } from "../api/weather.types";

// Define query keys for weather data based on coordinates
const weatherkey = {
    coords: ({lat, lon}: coordinates) => ["weather", "coords", lat, lon] as const,
    forecast: ({lat, lon}: coordinates) => ["forecast", "coords", lat, lon] as const,
    city: ({q}: {q: string}) => ["weather", "city", q] as const,
}

export const useWeatherByCoords = (
    lat: number | null | undefined,
    lon: number | null | undefined,
) => {
    const hasCoords = typeof lat === "number" && typeof lon === "number";

    const getQuery = useQuery<WeatherData>({
        queryKey: hasCoords
            ? weatherkey.coords({ lat, lon })
            : ["weather", "coords", "pending"],
        queryFn: () => {
            if (!hasCoords) {
                throw new Error("Missing coordinates");
            }

            return weatherApi.feactCityName({ lat, lon });
        },
        enabled: hasCoords,
    });

    return {
        data: getQuery.data,
        cityName: getQuery.data?.name,
        temp: getQuery.data?.main.temp,
        condition: getQuery.data?.weather[0]?.main,
        windSpeed: getQuery.data?.wind.speed,
        humidity: getQuery.data?.main.humidity,
        isLoading: getQuery.isLoading,
        error: getQuery.error,
    };
};

export const useForecastData = (
    lat: number | null | undefined,
    lon: number | null | undefined,
) => {
    const hasCoords = typeof lat === "number" && typeof lon === "number";

    const getQuery = useQuery<ForecastData>({
        queryKey: hasCoords
            ? weatherkey.forecast({ lat, lon })
            : ["forecast", "coords", "pending"],
        queryFn: () => {
            if (!hasCoords) {
                throw new Error("Missing coordinates");
            }

            return weatherApi.feactForecast({ lat, lon });
        },
        enabled: hasCoords,
    });

    return {
        data: getQuery.data,
        list: getQuery.data?.list,
        isLoading: getQuery.isLoading,
        error: getQuery.error,
    };
};

export const useSearchWeather = (
    cityName: string | null | undefined,
) => {
    const hasCityName = typeof cityName === "string";

    const getQuery = useQuery<WeatherData>({
        queryKey: hasCityName
            ? weatherkey.city({ q: cityName })
            : ["weather", "city", "pending"],
        queryFn: () => {
            if (!hasCityName) {
                throw new Error("Missing city name");
            }

            return weatherApi.feactByCityName({ q: cityName });
        },
        enabled: hasCityName,
    });

    return {
        data: getQuery.data,
        cityName: getQuery.data?.name,
        temp: getQuery.data?.main.temp,
        condition: getQuery.data?.weather[0]?.main,
        windSpeed: getQuery.data?.wind.speed,
        humidity: getQuery.data?.main.humidity,
        isLoading: getQuery.isLoading,
        error: getQuery.error,
    };
};      