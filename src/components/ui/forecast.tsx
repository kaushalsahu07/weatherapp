import { useForecastData } from "../../hooks/useWeather";
import { useGeoCoding } from "../../hooks/geocoding";
import WeatherIcon from "./weatherIcon";
import { format } from "date-fns";
import { WeatherCondition } from "../../api/weather.types";
// Import weather icons for different conditions
import rainPng from "../../assets/rain.png";
import rainWebp from "../../assets/rain.webp";
import cloudPng from "../../assets/cloud.png";
import cloudWebp from "../../assets/cloud.webp";
import snowPng from "../../assets/snow.png";
import snowWebp from "../../assets/snow.webp";
import thunderPng from "../../assets/thunderstorm.png";
import thunderWebp from "../../assets/thunderstorm.webp";
import mistPng from "../../assets/mist.png";
import mistWebp from "../../assets/mist.webp";
import drizzlePng from "../../assets/drizzle.png";
import drizzleWebp from "../../assets/drizzle.webp";
import clearPng from "../../assets/clear.png";
import clearWebp from "../../assets/clear.webp";
import fogPng from "../../assets/fog.png";
import fogWebp from "../../assets/fog.webp";

const getWeatherIcons = (condition?: WeatherCondition) => {
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

const ForecastBox = () => {
  const { location } = useGeoCoding();
  const { list, isLoading, error } = useForecastData(
    location.coords?.lat ?? null,
    location.coords?.lon ?? null,
  );

  if (isLoading) {
    return <div className="w-20 h-full grid text-center">Loading...</div>;
  }

  if (error || !list?.length) {
    return <div className="w-20 h-full grid text-center">No forecast data</div>;
  }

  // Group by day and get first forecast for each day
  const dailyForecasts = list.reduce(
    (acc: Record<string, { forecast: (typeof list)[0]; dayLabel: string }>, forecast) => {
      const dayKey = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
      if (!acc[dayKey]) {
        acc[dayKey] = {
          forecast,
          dayLabel: format(new Date(forecast.dt * 1000), "EEE"),
        };
      }
      return acc;
    },
    {}
  );

  const forecastDays = Object.values(dailyForecasts).slice(1, 5);

  return (
    <>
      {forecastDays.map(({ forecast: day, dayLabel }) => {
        const { img, imgWebp } = getWeatherIcons(day.weather[0]?.main);
        const temp = Math.round(day.main.temp);

        return (
          <div key={day.dt} className="w-20 h-full grid text-center">
            <h1>{dayLabel}</h1>
            <WeatherIcon
              img={img}
              imgWebp={imgWebp}
              className="w-55"
            />
            <div className="text-2xl">
              {temp} <span>°</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ForecastBox;