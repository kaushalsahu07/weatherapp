import { coordinates } from "../api/weather.types";

export const weatherkey = {
    coords: ({lat, lon}: coordinates) => ["weather", "coords", lat, lon] as const,
}