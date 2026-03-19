import { weatherkey } from "../services/queryKeys";
import { weatherApi } from "../api/weather";
import { useQuery } from "@tanstack/react-query";

export const useWeatherByCoords = (lat: number | null, lon: number | null) => {
    const getQuery = useQuery({
        queryKey: weatherkey.coords({ lat: lat!, lon: lon! }),
        queryFn: () => weatherApi.feactCityName({ lat: lat!, lon: lon! }),
        enabled: lat !== null && lon !== null,
    });

    return {
        cityName: getQuery.data,
        ...getQuery,
    };
};
