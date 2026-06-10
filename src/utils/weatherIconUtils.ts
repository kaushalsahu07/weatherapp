import { WeatherCondition } from "../api/weather.types";

// Import weather icons for different conditions
import rainPng from "../assets/rain.png";
import rainWebp from "../assets/rain.webp";
import cloudPng from "../assets/cloud.png";
import cloudWebp from "../assets/cloud.webp";
import snowPng from "../assets/snow.png";
import snowWebp from "../assets/snow.webp";
import thunderPng from "../assets/thunderstorm.png";
import thunderWebp from "../assets/thunderstorm.webp";
import mistPng from "../assets/mist.png";
import mistWebp from "../assets/mist.webp";
import drizzlePng from "../assets/drizzle.png";
import drizzleWebp from "../assets/drizzle.webp";
import clearPng from "../assets/clear.png";
import clearWebp from "../assets/clear.webp";
import fogPng from "../assets/fog.png";
import fogWebp from "../assets/fog.webp";

type WeatherIcon = {
  img: string;
  imgWebp: string;
};

// Function to get appropriate weather icons based on the weather condition
export const getWeatherIcons = (condition?: WeatherCondition): WeatherIcon => {
  switch (condition) {
    case "Rain":
      return { img: rainPng, imgWebp: rainWebp };
    case "Clouds":
      return { img: cloudPng, imgWebp: cloudWebp };
    case "Thunderstorm":
      return { img: thunderPng, imgWebp: thunderWebp };
    case "Mist":
      return { img: mistPng, imgWebp: mistWebp };
    case "Drizzle":
      return { img: drizzlePng, imgWebp: drizzleWebp };
    case "Snow":
      return { img: snowPng, imgWebp: snowWebp };
    case "Fog":
    case "Smoke":
      return { img: fogPng, imgWebp: fogWebp };
    case "Clear":
    default:
      return { img: clearPng, imgWebp: clearWebp };
  }
};
