import { weatherApi } from "../api/weather";
import { useQuery } from "@tanstack/react-query";
import { coordinates } from "../api/weather.types";

// Define query keys for weather data based on coordinates
export const weatherkey = {
    coords: ({lat, lon}: coordinates) => ["weather", "coords", lat, lon] as const,
}

export const useWeatherByCoords = (
    lat: number | null | undefined,
    lon: number | null | undefined,
) => {
    const hasCoords = typeof lat === "number" && typeof lon === "number";

    const getQuery = useQuery({
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
