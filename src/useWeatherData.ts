import { useState, useEffect } from "react";
const WEATHER_URL_BASE = "https://weatherapi-com.p.rapidapi.com/current.json";

const generateFinalUrl = (location: string) => {
  if (location === "") {
    return "";
  }
  const uriEncodedLocation = encodeURIComponent(location);
  return `${WEATHER_URL_BASE}?q=${uriEncodedLocation}`;
};
const useWeatherData = (
  location: string
): { data: any; loading: boolean; error: any } => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUrl = generateFinalUrl(location);
  useEffect(() => {
    if (fetchUrl === "") return;
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch(fetchUrl, {
          headers: {
            "X-RapidAPI-Key":
              "0f85e33055mshb2d116d12997e82p11fcc0jsnd17f3a25ce20",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        });
        if (!response.ok) {
          if (response.status === 400) {
            throw new Error("Unrecognized City/Town Please Try Again");
          } else {
            throw new Error(
              "Weather API is unavailable, please try refreshing your page."
            );
          }
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);
  return { data, loading, error };
};

export default useWeatherData;
