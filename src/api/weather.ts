import { weatherClient } from "./config";
import { coordinates, WeatherData } from "./weather.types";

class WeatherApi {
  //Feacting the city name by using geocoding api
  feactCityName = async ({ lat, lon }: coordinates) => {
    const { data } = await weatherClient.get("/weather?", {
      params: { lat, lon },
    });
    if (!data || typeof data.name !== "string" || !data.main) {
      throw new Error("Weather data not found!");
    }

    return data as WeatherData;
  };
}

export const weatherApi = new WeatherApi();
