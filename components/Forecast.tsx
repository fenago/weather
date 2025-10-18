import { WeatherData } from "@/types/weather";
import ForecastCard from "./ForecastCard";

interface ForecastProps {
  data: WeatherData;
}

export default function Forecast({ data }: ForecastProps) {
  // Skip today (index 0) and show next 5 days
  const forecastDays = data.daily.time.slice(1, 6);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {forecastDays.map((date, index) => (
          <ForecastCard
            key={date}
            date={date}
            weatherCode={data.daily.weatherCode[index + 1]}
            tempMax={data.daily.temperatureMax[index + 1]}
            tempMin={data.daily.temperatureMin[index + 1]}
          />
        ))}
      </div>
    </div>
  );
}
