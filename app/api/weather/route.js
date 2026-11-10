import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city")?.trim();

  if (!city) {
    return NextResponse.json(
      { error: "City parameter is required" },
      { status: 400 },
    );
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenWeather API key is not configured" },
        { status: 500 },
      );
    }
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city,
      )}&appid=${apiKey}&units=metric`,
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "City not found" },
        { status: res.status },
      );
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 },
    );
  }
}
