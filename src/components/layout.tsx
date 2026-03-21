// Import necessary libraries and components
import Weathericon from "../utils/weatherIcon";
import Box from "./ui/box";
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
// Import custom hooks for geocoding and weather data
import { useGeoCoding } from "../hooks/geocoding";
import { useWeatherByCoords } from "../hooks/useWeather";
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

  return (
    <>
      <div className="bg-gradient-to-br from-violet-500 to-blue-400 h-screen flex justify-center items-center">
        <Box
          bgcolor="white15"
          className="h-150 w-[20rem] p-6 text-amber-50 overflow-auto"
        >
          {/* Top Section */}
          <div className="flex text-[18px] justify-between">
            <div>{cityLabel}</div>
            <div>10:00 am</div>
          </div>
          {/* Weather Image */}
          <div className="grid justify-center mt-5 ">
            <Weathericon
              img={
                condition === "Rain"
                  ? rainPng
                  : condition === "Clouds"
                    ? cloudPng
                    : condition === "Thunderstorm"
                      ? thunderPng
                      : condition === "Mist"
                        ? mistPng
                        : condition === "Drizzle"
                          ? drizzlePng
                          : condition === "Clear"
                            ? clearPng
                            : condition === "Snow"
                            ? snowPng
                            : condition === "Fog"
                            ? fogPng
                            : clearPng
              }
              imgWebp={
                condition === "Rain"
                  ? rainWebp
                  : condition === "Clouds"
                    ? cloudWebp
                    : condition === "Thunderstorm"
                      ? thunderWebp
                      : condition === "Mist"
                        ? mistWebp
                        : condition === "Drizzle"
                          ? drizzleWebp
                          : condition === "Clear"
                            ? clearWebp
                            : condition === "Snow"
                            ? snowWebp
                            : condition === "Fog"
                            ? fogWebp
                            : clearWebp
              }
              className="w-55"
            />
          </div>
          {/* Temp */}
          <div className="text-center temp">
            <span className="flex mx-10 text-[11rem] text-white leading-none">
              {temp == null ? 0 : `${Math.round(temp)}`}{" "}
              <span className="text-[50px]">°</span>
            </span>
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
          <Box className="h-50 mt-4 py-5 px-2 gap-2 flex">
            <div className="w-20 h-full grid text-center">
              <h1>Monday</h1>
              <Weathericon img={rainPng} imgWebp={rainWebp} className="w-20" />
              <div className="text-2xl">
                25 <span>°</span>
              </div>
            </div>
            <div className="w-20 h-full grid text-center">
              <h1>Monday</h1>
              <Weathericon img={rainPng} imgWebp={rainWebp} className="w-20" />
              <div className="text-2xl">
                25 <span>°</span>
              </div>
            </div>
            <div className="w-20 h-full grid text-center">
              <h1>Monday</h1>
              <Weathericon img={rainPng} imgWebp={rainWebp} className="w-20" />
              <div className="text-2xl">
                25 <span>°</span>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Layout;
