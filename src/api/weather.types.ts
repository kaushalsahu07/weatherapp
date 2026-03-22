export interface coordinates {
  lat: number;
  lon: number;
}

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  }
  wind: {
    speed: number;
  }
  weather: { main: WeatherCondition }[];
}

export interface ForecastListItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: { main: WeatherCondition }[];
}

export interface ForecastData {
  list: ForecastListItem[];
}

// weather condition
export type WeatherCondition =
  | "Clear"
  | "Clouds"
  | "Rain"
  | "Drizzle"
  | "Thunderstorm"
  | "Snow"
  | "Mist"
  | "Fog"
  | "Smoke";
