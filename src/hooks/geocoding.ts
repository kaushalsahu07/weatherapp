import { useEffect, useState } from "react";
import { coordinates } from "../api/weather.types";

interface UseGeoCodingResult {
  coords: coordinates | null;
  error: string | null;
  isLoading: boolean;
}

export const useGeoCoding = () => {
  const [location, setLocation] = useState<UseGeoCodingResult>(
    {
      coords: null,
      error: null,
      isLoading: true
    }
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by this browser.",
        isLoading: false
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation((prev) => ({
          ...prev,
          coords: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          },
          isLoading: false
        }));

      },
      (geoError) => {
        let errorMessage: string;

        switch (geoError.code) {
          case geoError.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Please enable location access.";
            break;
          case geoError.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case geoError.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
        }

        setLocation((prev) => ({
          ...prev,
          error: errorMessage,
          isLoading: false
        }));
      }
    );
  }, []);

  return { location };
};