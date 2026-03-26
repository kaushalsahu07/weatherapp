// Import necessary libraries and components
import Weathericon, { getWeatherIcons } from "./ui/weatherIcon";
import Box from "./ui/box";
import ForecastBox from "./ui/forecast";

// Import custom hooks for geocoding and weather data
import { useGeoCoding } from "../hooks/geocoding";
import { useWeatherByCoords } from "../hooks/useWeather";
import { format } from "date-fns";
// Main layout component for the weather app
const Layout = () => {
  const { location } = useGeoCoding();
  const { cityName, temp, condition, windSpeed, humidity } = useWeatherByCoords(
    location.coords?.lat ?? null,
    location.coords?.lon ?? null,
  );

  const cityLabel = location.isLoading
    ? "Detecting location..."
    : location.error
      ? "Location unavailable"
      : (cityName ?? "Unknown city");

  // Getting time
  const timeNow = format(new Date(), "h:mm a");

  //Get weather icons based on condition
  const { img, imgWebp } = getWeatherIcons(condition);

  return (
    <>
      <div className="bg-gradient-to-br from-violet-500 to-blue-400 h-screen flex justify-center items-center">
        <Box
          bgcolor="white15"
          className="md:h-150 h-full w-screen md:w-[20rem] p-6 text-amber-50 overflow-auto"
        >
          {/* Top Section */}
          <div className="flex text-[18px] justify-between">
            <div>{cityLabel}</div>
            <div>{timeNow}</div>
          </div>
          {/* Weather Image */}
          <div className="my-5 h-55 m-auto grid place-items-center">
            <Weathericon img={img} imgWebp={imgWebp} className="w-55" />
          </div>
          {/* Temp */}
          <div className="text-center temp">
            <h1 className="flex justify-center text-[11rem] text-white leading-none">
              {temp == null ? 50 : `${Math.round(temp)}`}{" "}
              <span className="text-[50px]">°</span>
            </h1>
            <div className="weather text-[2rem]">{condition}</div>
          </div>
          {/* Mid Section */}
          <div className="flex mt-3 text-[18px] justify-between">
            <div className="">
              Wind:{" "}
              <span>{windSpeed == null ? 0 : Math.floor(windSpeed)} km/h</span>
            </div>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M491-200q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35Zm-239.5 26Q160-268 160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80q-137 0-228.5-94ZM652-230.5Q720-301 720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160q104 0 172-70.5ZM480-480Z" />
              </svg>
              <span>{humidity == null ? 0 : Math.floor(humidity)}%</span>
            </div>
          </div>
          {/* Forcast */}
          <Box className="h-50 mt-4 py-5 px-2 gap-2 flex overflow-y-hidden">
            <ForecastBox />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Layout;
