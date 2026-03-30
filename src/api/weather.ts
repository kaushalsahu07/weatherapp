import { weatherClient } from "./config";
import { coordinates, cityName, WeatherData, ForecastData } from "./weather.types";

class WeatherApi {
  //Feacting the city name by using geocoding api
  feactCityName = async ({ lat, lon }: coordinates) => {
    const { data } = await weatherClient.get("/weather?", {
      params: { lat, lon},
    });
    if (!data || typeof data.name !== "string" || !data.main) {
      throw new Error("Weather data not found!");
    }

    return data as WeatherData;
  };

  feactForecast = async ({ lat, lon }: coordinates) => {
    const { data } = await weatherClient.get("/forecast?", {
      params: { lat, lon },
    });
    if (!data || !Array.isArray(data.list)) {
      throw new Error("Weather Forecast data not found!");
    }

    return data as ForecastData;
  };

  feactByCityName = async ({q}: cityName ) => {
    const { data } = await weatherClient.get("/weather?", {
      params: {q},
    });
    if(!data || typeof data.name !== "string") {
      throw new Error("City Name not found!");
    }

    return data as WeatherData;
  }
}

export const weatherApi = new WeatherApi();
