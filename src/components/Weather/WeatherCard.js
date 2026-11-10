"use client";

import { useState } from "react";

export default function WeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "City not found");
      } else {
        setWeather(data);
      }
    } catch {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border p-6 rounded w-full max-w-md flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Weather Checker</h2>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded px-3 py-2 flex-1"
        />
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="flex flex-col gap-1 mt-2">
          <h3 className="text-xl font-bold">{weather.name}</h3>
          <p>Temperature: {weather.main?.temp} °C</p>
          <p>Humidity: {weather.main?.humidity}%</p>
          <p>Weather: {weather.weather?.[0]?.description}</p>
        </div>
      )}
    </div>
  );
}
