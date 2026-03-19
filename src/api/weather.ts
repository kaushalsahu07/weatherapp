import { geoClient } from "./config";
import { coordinates } from "./weather.types";

class WeatherApi {
    //Feacting the city name by using geocoding api
     feactCityName = async ({lat, lon}: coordinates) => {
        
        const { data } = await geoClient.get("/reverse?", {
            params: {lat,lon,limit: 1},
        });
        if(!data.length) throw new Error("Location not found!");

        return data[0].name;
}




}

export const weatherApi = new WeatherApi();