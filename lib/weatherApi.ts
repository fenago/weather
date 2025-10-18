import { WeatherData } from "@/types/weather";

const GEOCODING_API = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

export async function getCoordinates(city: string): Promise<{ latitude: number; longitude: number; name: string; country: string } | null> {
  try {
    const response = await fetch(`${GEOCODING_API}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      return {
        latitude: result.latitude,
        longitude: result.longitude,
        name: result.name,
        country: result.country,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}

export async function getWeatherData(latitude: number, longitude: number, city: string, country: string, unit: "celsius" | "fahrenheit" = "celsius"): Promise<WeatherData | null> {
  try {
    const tempUnit = unit === "fahrenheit" ? "temperature_unit=fahrenheit&" : "";
    const response = await fetch(
      `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&${tempUnit}current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=6`
    );
    const data = await response.json();

    return {
      current: {
        temperature: Math.round(data.current.temperature_2m),
        weatherCode: data.current.weather_code,
        windSpeed: Math.round(data.current.wind_speed_10m),
        humidity: data.current.relative_humidity_2m,
        time: data.current.time,
      },
      daily: {
        time: data.daily.time,
        temperatureMax: data.daily.temperature_2m_max.map((temp: number) => Math.round(temp)),
        temperatureMin: data.daily.temperature_2m_min.map((temp: number) => Math.round(temp)),
        weatherCode: data.daily.weather_code,
      },
      location: {
        city,
        country,
        latitude,
        longitude,
      },
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

export async function getWeatherByCity(city: string, unit: "celsius" | "fahrenheit" = "celsius"): Promise<WeatherData | null> {
  const coords = await getCoordinates(city);
  if (!coords) return null;
  
  return getWeatherData(coords.latitude, coords.longitude, coords.name, coords.country, unit);
}
