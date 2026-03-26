import { useForecastData } from "../../hooks/useWeather";
import { useGeoCoding } from "../../hooks/geocoding";
import WeatherIcon, { getWeatherIcons } from "./weatherIcon";
import { format } from "date-fns";

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
    (
      acc: Record<string, { forecast: (typeof list)[0]; dayLabel: string }>,
      forecast,
    ) => {
      const dayKey = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
      if (!acc[dayKey]) {
        acc[dayKey] = {
          forecast,
          dayLabel: format(new Date(forecast.dt * 1000), "EEE"),
        };
      }
      return acc;
    },
    {},
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
            <WeatherIcon img={img} imgWebp={imgWebp} className="w-55" />
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
