"use client";

interface UnitToggleProps {
  unit: "celsius" | "fahrenheit";
  onToggle: (unit: "celsius" | "fahrenheit") => void;
}

export default function UnitToggle({ unit, onToggle }: UnitToggleProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex rounded-xl bg-white p-1 shadow-md border-2 border-slate-200">
        <button
          onClick={() => onToggle("celsius")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            unit === "celsius"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          °C
        </button>
        <button
          onClick={() => onToggle("fahrenheit")}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            unit === "fahrenheit"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          °F
        </button>
      </div>
    </div>
  );
}
