import { getWeatherInfo } from "@/lib/weatherCodes";

interface ForecastCardProps {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  isToday?: boolean;
}

export default function ForecastCard({
  date,
  weatherCode,
  tempMax,
  tempMin,
  isToday = false,
}: ForecastCardProps) {
  const weatherInfo = getWeatherInfo(weatherCode);
  const dateObj = new Date(date);
  const dayName = isToday
    ? "Today"
    : dateObj.toLocaleDateString("en-US", { weekday: "short" });
  const dateStr = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-slate-200 hover:border-blue-300">
      <div className="text-center">
        <h3 className="font-bold text-lg mb-1 text-slate-800">
          {dayName}
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          {dateStr}
        </p>
        
        <div className="text-6xl mb-4">{weatherInfo.icon}</div>
        
        <p className="text-sm text-slate-600 mb-4 min-h-[40px]">
          {weatherInfo.description}
        </p>
        
        <div className="flex justify-center items-center gap-3">
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-1">High</p>
            <p className="text-2xl font-bold text-red-500">{tempMax}°</p>
          </div>
          <div className="text-slate-300 text-2xl">/</div>
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-1">Low</p>
            <p className="text-2xl font-bold text-blue-500">{tempMin}°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
