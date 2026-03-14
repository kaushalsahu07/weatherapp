import Weathericon from "../utils/weatherIcon";
import Box from "./ui/box";

import rainPng from "../assets/rain.png";
import rainWebp from "../assets/rain.webp";

const Layout = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-violet-500 to-blue-400 h-screen flex justify-center items-center">
        <Box bgcolor="white15" className="h-200 w-[20rem] p-6 text-amber-50">
          {/* Top Section */}
          <div className="flex text-[18px] justify-between">
            <div>city</div>
            <div>10:00 am</div>
          </div>
          {/* Weather Image */}
          <div className="grid justify-center mt-5 ">
            <Weathericon img={rainPng} imgWebp={rainWebp} className="w-50" />
          </div>
          {/* Temp */}
          <div className="text-center temp">
            <span className="flex mx-10 text-[13rem] text-white leading-none">
              25 <span className="text-[50px]">°</span>
            </span>
            <div className="weather text-[2rem]">Rain</div>
          </div>
          {/* Mid Section */}
          <div className="flex mt-3 text-[18px] justify-between">
            <div className="">
              Wind: <span>20km/h</span>
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
              <span>20%</span>
            </div>
          </div>
          {/* Forcast */}
          <Box className="h-50 mt-4 py-5 px-2 gap-2 flex">
            <div className="w-20 h-full grid text-center">
              <h1>Monday</h1>
              <Weathericon img={rainPng} imgWebp={rainWebp} className="w-20" />
              <div className="text-2xl">25 <span>°</span></div>
            </div>
            <div className="w-20 h-full grid text-center">
              <h1>Monday</h1>
              <Weathericon img={rainPng} imgWebp={rainWebp} className="w-20" />
              <div className="text-2xl">25 <span>°</span></div>
            </div>
            <div className="w-20 h-full grid text-center">
              <h1>Monday</h1>
              <Weathericon img={rainPng} imgWebp={rainWebp} className="w-20" />
              <div className="text-2xl">25 <span>°</span></div>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Layout;
