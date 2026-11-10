import WeatherCard from "@/src/components/Weather/WeatherCard";

export default function WeatherPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <a
        href="/"
        className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </a>
      <WeatherCard />
    </main>
  );
}
