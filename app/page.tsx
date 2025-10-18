"use client";

import { useState, useEffect } from "react";
import { WeatherData } from "@/types/weather";
import { getWeatherByCity } from "@/lib/weatherApi";
import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";
import SearchBar from "@/components/SearchBar";
import UnitToggle from "@/components/UnitToggle";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<"celsius" | "fahrenheit">("fahrenheit");

  // Load default city on mount
  useEffect(() => {
    handleSearch("Miami");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getWeatherByCity(city, unit);
      if (data) {
        setWeatherData(data);
      } else {
        setError("City not found. Please try another city.");
      }
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnitToggle = async (newUnit: "celsius" | "fahrenheit") => {
    setUnit(newUnit);
    if (weatherData) {
      // Re-fetch weather data with new unit
      setIsLoading(true);
      try {
        const data = await getWeatherByCity(weatherData.location.city, newUnit);
        if (data) {
          setWeatherData(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-3">
            Weather Dashboard
          </h1>
          <p className="text-xl text-slate-600">
            Get current weather and 5-day forecast for any city
          </p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        <UnitToggle unit={unit} onToggle={handleUnitToggle} />

        {error && (
          <div className="bg-red-50 border-2 border-red-300 text-red-700 px-6 py-4 rounded-xl mb-8 text-center shadow-sm">
            <p className="font-semibold">{error}</p>
          </div>
        )}

        {isLoading && (
          <div className="text-center py-20">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute animate-pulse-ring rounded-full h-24 w-24 border-4 border-blue-300"></div>
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent shadow-lg"></div>
            </div>
            <p className="mt-6 text-xl text-slate-700 font-medium">
              Loading weather data...
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Fetching forecast from Open-Meteo
            </p>
          </div>
        )}

        {weatherData && !isLoading && (
          <div className="space-y-8 animate-fadeIn">
            <CurrentWeather data={weatherData} />
            <Forecast data={weatherData} />
          </div>
        )}

        <footer className="mt-16 text-center text-slate-600">
          <p className="text-sm">
            Weather data provided by{" "}
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline font-semibold transition-colors"
            >
              Open-Meteo
            </a>
          </p>
        </footer>
      </div>

      {/* Chatbot */}
      <ChatBot weatherData={weatherData} unit={unit} />
    </main>
  );
}
