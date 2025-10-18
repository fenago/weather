import { WeatherData } from "@/types/weather";
import { getWeatherInfo } from "@/lib/weatherCodes";

interface CurrentWeatherProps {
  data: WeatherData;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const weatherInfo = getWeatherInfo(data.current.weatherCode);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {data.location.city}
          </h2>
          <p className="text-blue-100 text-lg">{data.location.country}</p>
        </div>
        
        <div className="text-center md:text-right">
          <div className="flex items-center justify-center md:justify-end gap-4 mb-2">
            <span className="text-7xl md:text-8xl">{weatherInfo.icon}</span>
            <span className="text-7xl md:text-8xl font-bold">
              {data.current.temperature}°
            </span>
          </div>
          <p className="text-xl text-blue-100">{weatherInfo.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-blue-400">
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-blue-100 text-sm mb-1">Wind Speed</p>
          <p className="text-2xl font-semibold">{data.current.windSpeed} km/h</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-blue-100 text-sm mb-1">Humidity</p>
          <p className="text-2xl font-semibold">{data.current.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
